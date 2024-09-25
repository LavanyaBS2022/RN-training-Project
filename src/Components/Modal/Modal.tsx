import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

interface ModalProps {
    visible: boolean;                     
    onClose: () => void;               
    items: string[];                     
}

const CustomModal: React.FC<ModalProps> = ({ visible, onClose, items }) => {
    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>Select an Item</Text>
                    <FlatList
                        data={items}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.item} onPress={() => {}}>
                                <Text style={styles.itemText}>{item}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        color:'black',
        fontSize: 16,
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#2196F3',
        borderRadius: 5,
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default CustomModal;
