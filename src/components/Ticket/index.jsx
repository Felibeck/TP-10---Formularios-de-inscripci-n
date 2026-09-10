import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors, fonts, tiers } from "../../theme";

function generarNumeroSocio(nombre = '', apellido = '') {
    const base = `${nombre}${apellido}`
        .toUpperCase()
        .split('')
        .reduce((acc, ch) => acc + ch.charCodeAt(0), 7);
    const parteA = String(1000 + (base % 9000)).padStart(4, '0');
    const parteB = String(1000 + ((base * 13) % 9000)).padStart(4, '0');
    return `${parteA}-${parteB}-100`;
}

function Stat({ label, value }) {
    return (
        <View style={styles.stat}>
            <Text style={styles.statLabel}>{label}</Text>
            <Text style={styles.statValue}>{value}</Text>
        </View>
    );
}

function Ticket({ visible, data, onClose }) {
    if (!data) return null;

    const tier = tiers[data.tipoTarjeta] ?? tiers.gold;
    const nombreCompleto = `${data.nombre} ${data.apellido}`.trim();
    const numeroSocio = generarNumeroSocio(data.nombre, data.apellido);

    return (
        <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
            <ScrollView
                style={styles.overlay}
                contentContainerStyle={styles.overlayContent}
            > 
                <View style={[styles.card, { backgroundColor: tier.surface, borderColor: tier.accent }]}>
                    <View style={[styles.topBar, { backgroundColor: tier.accent }]} />

                    <Text style={styles.watermark}>$</Text>
                    <View style={styles.glare} />
              
                    <Pressable style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeText}>✕</Text>
                    </Pressable>

                    <View style={styles.body}>
                        <View style={styles.headerRow}>
                            <View>
                                <Text style={[styles.brand, { color: tier.accent }]}>SUCCESS WEB</Text>
                                <Text style={styles.brandSub}>CERTIFICADO DE ÉXITO</Text>
                            </View>
                            <View style={[styles.badge, { backgroundColor: tier.accent }]}>
                                <Text style={styles.badgeText}>{tier.label}</Text>
                            </View>
                        </View>

                        <View style={[styles.divider, { backgroundColor: tier.accent, opacity: 0.35 }]} />

                        <Text style={styles.label}>Titular</Text>
                        <Text style={styles.nombre}>{nombreCompleto}</Text>

                        <Text style={[styles.label, { marginTop: 14 }]}>Contacto</Text>
                        <Text style={styles.email}>{data.email}</Text>

                        <View style={styles.statsGrid}>
                            <Stat label="Propiedades" value={data.numPropiedades} />
                            <Stat label="Hectáreas" value={data.hectareas} />
                            <Stat label="Patrimonio" value={`$ ${data.Patrimonio} M`} />
                            <Stat label="Bitcoins" value={`₿ ${data.btc}`} />
                        </View>

                        <Text style={[styles.label, { marginTop: 6 }]}>N° de Socio</Text>
                        <Text style={[styles.serial, { color: tier.accent }]}>{numeroSocio}</Text>

                        <View style={styles.perforation}>
                            <View style={[styles.notch, { backgroundColor: tier.accent }]} />
                            <View style={[styles.dashedLine, { borderColor: tier.accent }]} />
                            <View style={[styles.notch, { backgroundColor: tier.accent }]} />
                        </View>

                        <View style={styles.stubRow}>
                            <Text style={[styles.stubTier, { color: tier.accent }]}>{tier.label}</Text>
                            <Text style={styles.stubAdmit}>ADMIT ONE</Text>
                        </View>
                        <Text style={styles.tagline}>Válido para una vida de excesos.</Text>
                        <Text style={[styles.motto, { color: tier.accent }]}>IN MONEY WE TRUST</Text>
                    </View>
                </View>

                <Pressable onPress={onClose}>
                    <Text style={styles.volver}>Volver a la fila de los mortales</Text>
                </Pressable>
            </ScrollView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(5, 4, 2, 0.9)',
    },
    overlayContent: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    card: {
        width: '100%',
        maxWidth: 400,
        borderRadius: 22,
        borderWidth: 1,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.5,
        shadowRadius: 30,
        elevation: 12,
    },
    topBar: {
        height: 6,
        width: '100%',
    },
    watermark: {
        position: 'absolute',
        top: -34,
        right: -14,
        fontSize: 220,
        fontFamily: fonts.serif,
        fontWeight: '700',
        color: 'rgba(255,255,255,0.05)',
        transform: [{ rotate: '-8deg' }],
    },
    glare: {
        position: 'absolute',
        top: -20,
        left: -60,
        width: '170%',
        height: 70,
        backgroundColor: 'rgba(255,255,255,0.05)',
        transform: [{ rotate: '-16deg' }],
    },
    closeButton: {
        position: 'absolute',
        top: 14,
        right: 14,
        width: 28,
        height: 28,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)',
        zIndex: 2,
    },
    closeText: {
        color: colors.cream,
        fontSize: 13,
    },
    body: {
        paddingHorizontal: 24,
        paddingTop: 26,
        paddingBottom: 22,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingRight: 30,
    },
    brand: {
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 2,
    },
    brandSub: {
        fontSize: 9,
        letterSpacing: 1.5,
        color: colors.creamSoft,
        marginTop: 3,
    },
    badge: {
        borderRadius: 999,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    badgeText: {
        fontSize: 10,
        fontWeight: '800',
        letterSpacing: 1,
        color: colors.ink,
    },
    divider: {
        height: 1,
        marginVertical: 16,
    },
    label: {
        fontSize: 10,
        letterSpacing: 1.5,
        textTransform: 'uppercase',
        color: colors.creamSoft,
        fontWeight: '700',
    },
    nombre: {
        fontFamily: fonts.serif,
        fontSize: 22,
        letterSpacing: 1,
        textTransform: 'uppercase',
        color: colors.cream,
        marginTop: 4,
    },
    email: {
        fontSize: 13,
        color: colors.creamSoft,
        marginTop: 3,
    },
    statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    stat: {
        width: '48%',
        marginBottom: 16,
    },
    statLabel: {
        fontSize: 10,
        letterSpacing: 1.5,
        textTransform: 'uppercase',
        color: colors.creamSoft,
        fontWeight: '700',
        marginBottom: 3,
    },
    statValue: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.cream,
    },
    serial: {
        fontFamily: fonts.mono,
        fontSize: 16,
        letterSpacing: 2,
        marginTop: 4,
    },
    perforation: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 22,
        marginBottom: 16,
    },
    notch: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    dashedLine: {
        flex: 1,
        marginHorizontal: 8,
        borderTopWidth: 1,
        borderStyle: 'dashed',
        opacity: 0.5,
    },
    stubRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    stubTier: {
        fontFamily: fonts.serif,
        fontSize: 18,
        letterSpacing: 2,
    },
    stubAdmit: {
        fontSize: 10,
        letterSpacing: 2,
        color: colors.creamSoft,
    },
    tagline: {
        fontSize: 11,
        fontStyle: 'italic',
        color: colors.creamSoft,
        textAlign: 'center',
        marginTop: 10,
    },
    motto: {
        fontSize: 10,
        fontWeight: '700',
        letterSpacing: 3,
        textAlign: 'center',
        marginTop: 16,
    },
    volver: {
        fontSize: 12,
        color: colors.creamSoft,
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginTop: 22,
    },
});

export default Ticket;
