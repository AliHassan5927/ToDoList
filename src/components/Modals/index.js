import { Colors } from '@constants';
import { Categories } from 'Mock';
import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { TouchableOpacity } from 'src/core-ui';
import { ButtonColered, LargeText, RegularText, Spacer, Wrapper } from '..';

export const FilterModal = ({ isVisible, toggleModal, onPressApply, selectedCategories, setSelectedCategories }) => {
    const [localSelectedCategories, setLocalSelectedCategories] = useState(selectedCategories);

    const handleSelectCategory = (value) => {
        setLocalSelectedCategories(value);
    };

    const applyFilters = () => {
        setSelectedCategories(localSelectedCategories);
        onPressApply();
    };

    return (
        <Modal
            isVisible={isVisible}
            onSwipeComplete={toggleModal}
            onBackdropPress={toggleModal}
            backdropOpacity={0.7}
            animationInTiming={700}
            animationOutTiming={700}
            animationIn={'zoomIn'}
            animationOut={'zoomOut'}
        >
            <Wrapper style={styles.container}>
                <FlatList
                    data={['All Tasks', ...Categories?.map(item => item?.label), 'Due Date Tasks']}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.categoryItem} onPress={() => handleSelectCategory(item)}>
                            <RegularText>{item}</RegularText>
                            {localSelectedCategories?.includes(item) && <LargeText style={styles.tickIcon}>✓</LargeText>}
                        </TouchableOpacity>

                    )}
                />
                <Spacer isBasic />
                <ButtonColered
                    text={'Apply'}
                    onPress={applyFilters}

                />
            </Wrapper>

        </Modal>
    );
};




const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background1,
        padding: 28,
        borderRadius: 18,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    categoryItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 3,
    },
    tickIcon: {
        color: Colors.primary,
    },
})