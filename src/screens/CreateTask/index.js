import { Check } from '@assets/Svgs'
import { CustomDropdown } from '@components/Dropdown'
import { TaskHeader } from '@components/Headers'
import { Spacer } from '@components/Spacers'
import { DateTimeInputPicker, Input } from '@components/TextInputs'
import { MainWrapper } from '@components/Wrappers'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { uniqueId } from '@services/helpers'
import { Categories } from 'Mock'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { TouchableOpacity } from 'src/core-ui'
import { addTask } from 'src/redux/actions'
import createTaskSchema from './createTask.schema'


const CreateTask = ({ navigation, route }) => {
    const { goBack } = navigation
    const { item } = route?.params ?? {}
    const dispatch = useDispatch()

    const defaultValues = {
        title: '',
        description: '',
        dueDate: '',
        category: ''
    }
    const {
        control, handleSubmit, setValue, formState: { errors }
    } = useForm({
        defaultValues: defaultValues,
        resolver: createTaskSchema
    });

    useEffect(() => {
        if (item) {
            const { title, description, dueDate, category } = item
            setValue('title', title)
            setValue('description', description)
            setValue('dueDate', dueDate)
            setValue('category', category)
        }
    }, [item])

    const handle_add_task = handleSubmit(async (data) => {
        const taskToUpdateOrAdd = { ...data, id: item ? item?.id : uniqueId() }
        try {
            const existingTasksJson = await AsyncStorage?.getItem('tasks');
            const existingTasks = existingTasksJson ? JSON?.parse(existingTasksJson) : [];

            let updatedTasks;
            if (item) {
                updatedTasks = existingTasks?.map(task => task?.id === item?.id ? taskToUpdateOrAdd : task);
            } else {
                updatedTasks = [...existingTasks, taskToUpdateOrAdd];
            }

            const jsonValue = JSON?.stringify(updatedTasks);
            await AsyncStorage?.setItem('tasks', jsonValue);

            dispatch(addTask(updatedTasks))
        } catch (e) {
            console.error('Error saving task to AsyncStorage:', e);
        }
        goBack();
    });

    return (
        <MainWrapper>
            <Spacer isBasic />
            <TaskHeader title={'New task'} />
            <Input
                control={control}
                title={'Title'}
                name={'title'}
                placeholder={'Enter task title'}
                errorMessage={errors?.title?.message}
            />
            <Spacer isDoubleBase />
            <Input
                multiline
                control={control}
                title={'Description'}
                name={'description'}
                placeholder={'Enter task description'}
            />
            <Spacer isDoubleBase />

            <DateTimeInputPicker
                control={control}
                name={'dueDate'}
                title={'Due date'}
            />
            <Spacer isDoubleBase />
            <CustomDropdown
                title={'Category'}
                control={control}
                errorMessage={errors?.category?.message}
                list={Categories}
                name={'category'}
                placeholder={'Select category'}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={handle_add_task}
            >
                <Check />
            </TouchableOpacity>
        </MainWrapper>
    )
}

export default CreateTask

const styles = StyleSheet.create({
    addButton: {
        position: 'absolute',
        bottom: 40,
        right: 20
    }
})