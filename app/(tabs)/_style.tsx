import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
    },
    content: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        width: '100%'
    },
    header: {
        width: '90%',
        paddingVertical: 18,
        borderRadius: 20,
        paddingHorizontal: 20,

        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        borderWidth: 1.5,
        overflow: 'visible',
        elevation: 0,
        shadowColor: '#000',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderColor: 'rgba(255, 255, 255, 0.25)',
        shadowOffset: { width: 0, height: 4 }, // Niche ki taraf parchai khiskayega
        shadowOpacity: 0.15,
        shadowRadius: 8,
        borderBottomWidth: 1,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ed548f',
        letterSpacing: 0.1,
    },
    searchInput: {
        flex: 1,
        fontSize: 18,
        color: '#000',
        marginRight: 10,
        paddingVertical: 0,
    },
    fab: {
        position: 'absolute',
        bottom: 150,
        right: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 2,
        width: 65,
        height: 65,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 0, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    fabText: {
        color: '#ed548f',
        fontSize: 50,
        marginTop: -3, // Taki + sign perfectly center mein aaye
    },
    noteCard: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 12,
        marginTop: 10,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 2, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.05,
        shadowRadius: 12,

    },
    deleteSwipeBackground: {
        backgroundColor: '#d5fabf',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 20,
        height: 54,
        borderRadius: 12,
        marginTop: 10, // noteCard ke marginTop ke barabar
        marginRight: '5%', // Taki border se chipke nahi
    },
    deleteSwipeText: {
        color: '#2d7a2d',
        fontWeight: 'bold',
        fontSize: 14,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#ed548f',
    },
    modalInput: {
        backgroundColor: '#f9f9f9',
        borderRadius: 12,
        padding: 15,
        fontSize: 16,
        minHeight: 120,          // Bada dabba note likhne ke liye
        textAlignVertical: 'top', // Text upar se shuru hoga
        borderWidth: 1,
        borderColor: '#eee',
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        flex: 1,
        padding: 15,
        borderRadius: 12,
        backgroundColor: '#f1f1f1',
        marginRight: 10,
        alignItems: 'center',
    },
    cancelButtonText: {
        color: '#666',
        fontWeight: 'bold',
        fontSize: 16,
    },
    saveButton: {
        flex: 1,
        padding: 15,
        borderRadius: 12,
        backgroundColor: '#ed548f',
        marginLeft: 10,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export { styles };