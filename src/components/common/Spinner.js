import React from "react";
import { 
    View,
    ActivityIndicator,StyleSheet
} from "react-native";

const Spinner = ({size}) => (
    <View style={styles.spinnerStyle} >
        <ActivityIndicator 
        size={size||'large'}
        />
    </View>
    )
export  {Spinner};

const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
 
});