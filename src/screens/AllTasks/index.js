import { Add, Filter, Search } from '@assets/Svgs'
import { FilterModal } from '@components/Modals'
import { Spacer } from '@components/Spacers'
import { Input } from '@components/TextInputs'
import { LargeText } from '@components/Texts'
import { MainWrapper, Wrapper } from '@components/Wrappers'
import { Colors, Route } from '@constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { height, width } from '@services/dimensions'
import moment from 'moment'
import React, { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FlatList, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { TouchableOpacity } from 'src/core-ui'
import { addTask, deleteTask } from 'src/redux/actions'
import { TaskCard } from './TaskCard'

const AllTasks = ({ navigation }) => {
    const { navigate } = navigation
    const tasks = useSelector(state => state?.tasks)
    const [showModal, setShowModal] = useState(false)
    const [selectedCategories, setSelectedCategories] = useState('All Tasks');
    const dispatch = useDispatch()

    const { control, watch } = useForm({
        defaultValues: {
            search: ''
        },
    });


    const filteredTasks = useMemo(() => {
        let filtered = tasks;
        if (selectedCategories == 'All Tasks') {
            filtered = tasks;
        } else if (selectedCategories == 'Due Date Tasks') {
            filtered = tasks?.filter(task => task.dueDate)?.sort((a, b) => new Date(a?.dueDate) - new Date(b?.dueDate));
        } else {
            filtered = tasks?.filter(task => selectedCategories?.includes(task.category));
        }

        if (watch('search')) {
            filtered = filtered?.filter(task => task?.title?.toLowerCase()?.includes(watch('search')?.toLowerCase()));
        }

        return filtered;
    }, [tasks, selectedCategories, watch('search')]);


    const handle_delete_task = async (item) => {
        try {
            const updatedTasks = tasks?.filter(task => task?.id !== item?.id);
            dispatch(deleteTask(updatedTasks));
            const jsonValue = JSON?.stringify(updatedTasks);
            await AsyncStorage?.setItem('tasks', jsonValue);
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    useEffect(() => {
        const getTasks = async () => {
            try {
                const jsonValue = await AsyncStorage?.getItem('tasks');
                if (jsonValue !== null) {
                    const tasks = JSON.parse(jsonValue);
                    dispatch(addTask(tasks))
                }
            } catch (error) {
                console.error('Error while getting tasks:', error);
            }
        };

        getTasks();
    }, [tasks]);


    return (
        <MainWrapper>
            <Spacer isBasic />
            <Wrapper style={styles.row}>
                <LargeText>My Tasks</LargeText>
            </Wrapper>
            <Spacer isSmall />
            <Input
                control={control}
                containerStyle={styles.input}
                name={'search'}
                placeholder={'Search here....'}
                left={<Search />}
                right={<Filter onPress={() => setShowModal(!showModal)} />}
                textStyle={styles.search}
            />
            {filteredTasks?.length <= 0 &&
                <LargeText style={styles.notFound}>No Task Found</LargeText>
            }
            <FlatList
                data={filteredTasks}
                ItemSeparatorComponent={<Spacer isBasic />}
                ListFooterComponent={<Spacer height={35} />}
                ListHeaderComponent={<Spacer isBasic />}
                showsVerticalScrollIndicator={false}
                style={{ marginHorizontal: -5 }}
                contentContainerStyle={{ paddingHorizontal: 5 }}
                renderItem={({ item }) => (
                    <TaskCard
                        category={item?.category}
                        title={item?.title}
                        date={item?.dueDate && moment(item?.dueDate)?.format('MM/DD/YYYY')}
                        onPressCard={() => navigate(Route.task_detail, { item })}
                        onPressEdit={() => navigate(Route.create_task, { item })}
                        onPressDelete={() => handle_delete_task(item)}
                    />
                )}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigate(Route.create_task)}
            >
                <Add />
            </TouchableOpacity>
            <FilterModal
                isVisible={showModal}
                toggleModal={() => setShowModal(!showModal)}
                onPressApply={() => setShowModal(false)}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
            />
        </MainWrapper>
    )
}

export default AllTasks
const styles = StyleSheet.create({
    addButton: {
        position: 'absolute',
        bottom: 40,
        right: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: "center"
    },
    input: {
        borderWidth: .9,
        borderRadius: 10,
        paddingHorizontal: 8,
        borderColor: Colors.placeholder
    },
    search: {
        paddingHorizontal: width(9)
    },
    notFound: {
        alignSelf: 'center',
        marginTop: height(5)
    }
})
