// CustomIcon.tsx
import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, FlatList, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface CustomIconProps {
    name: string;
    size: number;
    color: string;
    style?: object;
}

const CustomIcon: React.FC<CustomIconProps> = ({ name, size, color, style }) => {
    const [modalVisible, setModalVisible] = useState(false);

   
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

    const renderItem = ({ item }: { item: string }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
        </View>
    );

    return (
        <>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={style}>
                <Icon name={name} size={size} color={color} />
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Select an Item</Text>
                        <FlatList
                            data={items}
                            renderItem={renderItem}
                            keyExtractor={(item) => item}
                        />
                        <TouchableOpacity 
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    itemContainer: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 16,
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default CustomIcon;
