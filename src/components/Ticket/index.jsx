import { Modal, View, Text, StyleSheet, Pressable } from "react-native";
import { colors, fonts } from "../../theme";

function Ticket({ visible, data, onClose }) {
    if (!data) return null;

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
        >
            <Pressable 
                style={styles.backdrop}
                onPress={onClose}
            >
                <View style={styles.ticketContainer}>
                    <View style={styles.ticket}>
                        <Text style={styles.title}>¡Bienvenido a Success Web!</Text>
                        <Text style={styles.subtitle}>Certificado de Admisión</Text>

                        <View style={styles.divider} />

                        <View style={styles.dataRow}>
                            <Text style={styles.label}>Nombre:</Text>
                            <Text style={styles.value}>{data.nombre} {data.apellido}</Text>
                        </View>

                        <View style={styles.dataRow}>
                            <Text style={styles.label}>Email:</Text>
                            <Text style={styles.value}>{data.email}</Text>
                        </View>

                        <View style={styles.dataRow}>
                            <Text style={styles.label}>Propiedades:</Text>
                            <Text style={styles.value}>{data.numPropiedades}</Text>
                        </View>

                        <View style={styles.dataRow}>
                            <Text style={styles.label}>Tarjeta:</Text>
                            <Text style={styles.value}>{data.tipoTarjeta.toUpperCase()}</Text>
                        </View>

                        <View style={styles.dataRow}>
                            <Text style={styles.label}>Hectáreas:</Text>
                            <Text style={styles.value}>{data.hectareas || '-'}</Text>
                        </View>

                        <View style={styles.dataRow}>
                            <Text style={styles.label}>Patrimonio:</Text>
                            <Text style={styles.value}>${data.Patrimonio || '-'}M USD</Text>
                        </View>

                        <View style={styles.dataRow}>
                            <Text style={styles.label}>Bitcoin:</Text>
                            <Text style={styles.value}>{data.btc || '-'} BTC</Text>
                        </View>

                        <View style={styles.divider} />

                        <Pressable
                            onPress={onClose}
                            style={({ pressed }) => [
                                styles.button,
                                pressed && styles.buttonPressed
                            ]}
                        >
                            <Text style={styles.buttonText}>Volver a inscribir a otra persona</Text>
                        </Pressable>
                    </View>
                </View>
            </Pressable>
        </Modal>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ticketContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    ticket: {
        width: '90%',
        maxWidth: 420,
        backgroundColor: colors.card,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: colors.gold,
        paddingVertical: 28,
        paddingHorizontal: 24,
        shadowColor: colors.gold,
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.4,
        shadowRadius: 24,
        elevation: 12,
    },
    title: {
        fontFamily: fonts.serif,
        fontSize: 22,
        color: colors.ink,
        textAlign: 'center',
        letterSpacing: 1,
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 13,
        color: colors.goldDeep,
        textAlign: 'center',
        fontWeight: '600',
        marginBottom: 16,
    },
    divider: {
        height: 1,
        backgroundColor: colors.goldSoft,
        marginVertical: 14,
    },
    dataRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: 4,
    },
    label: {
        fontSize: 12,
        color: colors.goldDeep,
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    value: {
        fontSize: 13,
        color: colors.ink,
        fontWeight: '500',
        textAlign: 'right',
        flex: 1,
        marginLeft: 12,
    },
    button: {
        backgroundColor: colors.gold,
        borderRadius: 999,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonPressed: {
        backgroundColor: colors.goldDeep,
    },
    buttonText: {
        color: colors.ink,
        fontSize: 13,
        fontWeight: '700',
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
});

export default Ticket;
