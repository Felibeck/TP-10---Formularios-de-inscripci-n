import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { colors, fonts } from "../../theme";
import Ticket from "../Ticket";

function Campo({ label, error, children }) {
    return (
        <View style={styles.field}>
            <Text style={styles.label}>{label}</Text>
            {children}
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
}

function Formulario()
{
    const opcionesTarjeta = [
        {label: "Gold", value: 'gold'},
        {label: "Platinum", value: 'platinum'},
        {label: "Centurion", value: 'centurion'}
    ]

    const [ticket, setTicket] = useState(null);

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            nombre: '',
            apellido: '',
            email: '',
            numPropiedades: '',
            tipoTarjeta: '',
            hectareas: '',
            Patrimonio: '',
            btc: '',
        },
    });

    const closeTicket = () => {
        setTicket(null);
        reset({
            nombre: '',
            apellido: '',
            email: '',
            numPropiedades: '',
            tipoTarjeta: '',
            hectareas: '',
            Patrimonio: '',
            btc: '',
        });
    };

    const onSubmit = (data) => {
        const payload = {
            ...data,
            numPropiedades: Number(data.numPropiedades),
            hectareas: Number(data.hectareas),
            Patrimonio: Number(data.Patrimonio),
            btc: Number(data.btc),
        };
        console.log(payload);
        setTicket(payload);
    };

    return (
        <>
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Formulario de Admisión</Text>
            <Text style={styles.cardSubtitle}>
                Completá tus datos. Cuanto más alto el patrimonio, más cálida la bienvenida.
            </Text>

            <Campo label="Nombre" error={errors.nombre?.message}>
                <Controller
                    control={control}
                    name="nombre"
                    rules={{ required: 'El nombre es obligatorio' }}
                    render={({field}) => (
                        <TextInput
                            style={styles.input}
                            value={field.value}
                            onChangeText={field.onChange}
                            placeholder="Tu nombre"
                            placeholderTextColor={colors.inkSoft}
                        />
                    )}
                />
            </Campo>

            <Campo label="Apellido" error={errors.apellido?.message}>
                <Controller
                    control={control}
                    name="apellido"
                    rules={{ required: 'El apellido es obligatorio' }}
                    render={({field}) => (
                        <TextInput
                            style={styles.input}
                            value={field.value}
                            onChangeText={field.onChange}
                            placeholder="Tu apellido"
                            placeholderTextColor={colors.inkSoft}
                        />
                    )}
                />
            </Campo>

            <Campo label="Correo Electrónico" error={errors.email?.message}>
                <Controller
                    control={control}
                    name="email"
                    rules={{
                        required: 'El email es obligatorio',
                        pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' },
                    }}
                    render={({field}) => (
                        <TextInput
                            style={styles.input}
                            value={field.value}
                            onChangeText={field.onChange}
                            placeholder="tu@correo.com"
                            placeholderTextColor={colors.inkSoft}
                        />
                    )}
                />
            </Campo>

            <Campo label="Cantidad de Propiedades" error={errors.numPropiedades?.message}>
                <Controller
                    control={control}
                    name="numPropiedades"
                    rules={{
                        required: 'Campo obligatorio',
                        validate: (value) => !isNaN(Number(value)) || 'Debe ser un número', 
                        min: {value:10, message: 'Tenes que tener al menos 10 propiedades barat'},
                    }}
                    render={({field}) => (
                        <TextInput
                            style={styles.input}
                            keyboardType="number-pad"
                            value={field.value}
                            onChangeText={field.onChange}
                            placeholder="0"
                            placeholderTextColor={colors.inkSoft}
                        />
                    )}
                />
            </Campo>

            <Campo label="Tarjeta de Estatus" error={errors.tipoTarjeta?.message}>
                <Controller
                    control={control}
                    name="tipoTarjeta"
                    rules={{ required: 'Debés seleccionar el tipo de tarjeta' }}
                    render={({ field: { onChange, value } }) => (
                        <View style={styles.pickerWrap}>
                            <Picker
                                selectedValue={value}
                                onValueChange={onChange}
                                style={styles.picker}
                                itemStyle={styles.pickerItem}
                            >
                                {opcionesTarjeta.map((op) => (
                                    <Picker.Item key={op.value} label={op.label} value={op.value} />
                                ))}
                            </Picker>
                        </View>
                    )}
                />
            </Campo>

            <Campo label="Hectáreas en Posesión" error={errors.hectareas?.message}>
                <Controller
                    control={control}
                    name="hectareas"
                    rules={{ validate: (value) => value === '' || !isNaN(Number(value)) || 'Debe ser un número' }}
                    render={({field}) => (
                        <TextInput
                            style={styles.input}
                            keyboardType="number-pad"
                            value={field.value}
                            onChangeText={field.onChange}
                            placeholder="0"
                            placeholderTextColor={colors.inkSoft}
                        />
                    )}
                />
            </Campo>

            <Campo label="Patrimonio Neto (Millones de u$d)" error={errors.Patrimonio?.message}>
                <Controller
                    control={control}
                    name="Patrimonio"
                    rules={{ validate: (value) => value === '' || !isNaN(Number(value)) || 'Debe ser un número' }}
                    render={({field}) => (
                        <TextInput
                            style={styles.input}
                            keyboardType="number-pad"
                            value={field.value}
                            onChangeText={field.onChange}
                            placeholder="0"
                            placeholderTextColor={colors.inkSoft}
                        />
                    )}
                />
            </Campo>

            <Campo label="Bitcoins en Cartera Fría" error={errors.btc?.message}>
                <Controller
                    control={control}
                    name="btc"
                    rules={{ validate: (value) => value === '' || !isNaN(Number(value)) || 'Debe ser un número' }}
                    render={({field}) => (
                        <TextInput
                            style={styles.input}
                            keyboardType="number-pad"
                            value={field.value}
                            onChangeText={field.onChange}
                            placeholder="0"
                            placeholderTextColor={colors.inkSoft}
                        />
                    )}
                />
            </Campo>

            <Pressable
                onPress={handleSubmit(onSubmit)}
                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
            >
                <Text style={styles.buttonText}>Certificar mi Éxito</Text>
            </Pressable>

            <Text style={styles.disclaimer}>
                *Success Web no garantiza éxito real. Solo la ilusión de él.
            </Text>
        </View>

        <Ticket visible={!!ticket} data={ticket} onClose={closeTicket} />
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        maxWidth: 480,
        backgroundColor: colors.card,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: colors.cardBorder,
        paddingVertical: 32,
        paddingHorizontal: 28,
        shadowColor: colors.gold,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 24,
        elevation: 8,
    },
    cardTitle: {
        fontFamily: fonts.serif,
        fontSize: 24,
        color: colors.ink,
        textAlign: 'center',
        letterSpacing: 1,
        marginBottom: 6,
    },
    cardSubtitle: {
        fontSize: 13,
        color: colors.inkSoft,
        textAlign: 'center',
        fontStyle: 'italic',
        marginBottom: 26,
    },
    field: {
        marginBottom: 18,
    },
    label: {
        fontSize: 11,
        letterSpacing: 1.5,
        textTransform: 'uppercase',
        color: colors.goldDeep,
        fontWeight: '700',
        marginBottom: 6,
    },
    input: {
        borderBottomWidth: 1.5,
        borderBottomColor: colors.goldSoft,
        paddingVertical: 8,
        paddingHorizontal: 2,
        fontSize: 15,
        color: colors.ink,
    },
    pickerWrap: {
        borderBottomWidth: 1.5,
        borderBottomColor: colors.goldSoft,
    },
    picker: {
        color: colors.ink,
        backgroundColor: 'transparent',
    },
    pickerItem: {
        fontSize: 15,
        color: colors.ink,
    },
    error: {
        color: colors.error,
        fontSize: 12,
        marginTop: 4,
        fontStyle: 'italic',
    },
    button: {
        backgroundColor: colors.ink,
        borderWidth: 1,
        borderColor: colors.gold,
        borderRadius: 999,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonPressed: {
        backgroundColor: colors.goldDeep,
    },
    buttonText: {
        color: colors.gold,
        fontSize: 14,
        fontWeight: '700',
        letterSpacing: 2,
        textTransform: 'uppercase',
    },
    disclaimer: {
        fontSize: 10,
        color: colors.inkSoft,
        textAlign: 'center',
        marginTop: 14,
    },
});

export default Formulario;
