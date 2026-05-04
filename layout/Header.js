import { StyleSheet, Text, View, Image } from 'react-native';
import { CardTemperature } from '../components/feature/feature.js'

const img = {
    "logo": '../assets/icons/Logo-New-Nest.png',
}

function Header(){
    return(
        <View style={styles}>
            {/*Imagen Del logo*/}
            <Image source={img.logo} style={styles}/>

            {/*Componente feature  */}
            <CardTemperature />
        </View>
    )
}

const styles = StyleSheet.create({
    

})