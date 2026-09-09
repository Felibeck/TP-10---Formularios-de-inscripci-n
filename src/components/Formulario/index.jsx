import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native/types_generated/index";
import { View } from "react-native/types_generated/index";

function Formulario()
{
    const opcionesTarjeta = [
        {label: "Gold", value: 'gold'},
        {label: "Platinum", value: 'platinum'},
        {label: "Centurion", value: 'centurion'}
    ]


    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
                nombre: '',
                apellido: '',
                email: '',  
                numPropiedades: '',
                tipoTarjeta: 'gold',
                hectareas: '',
                patrimonio: '',
                btc:'',
        }
    });

    return (
        <View>


        <Controller

            control={control}
            name="nombre"
            render={({field}) => (
                <TextInput value={field.value} onChangeText={field.onChange} placeholder="Nombre"/>
            )}
            
        >

        </Controller>

        </View>
    )
}

export default Formulario;