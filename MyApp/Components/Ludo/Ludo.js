import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Bottles from './Bottles';
export default function Ludo(props) {
    const blocks = [];
    const blocks2 = [];
    const blocks3 = [];

    for (let i = 0; i <= 2; i++) {
        blocks.push(
            <View style={styles.RowContainer1}>
                {new Array(6).fill(null).map((_, k) => (
                    <View
                        style={
                            i == 0
                                ? k == 1
                                    ? styles.SmallgreenBox
                                    : styles.WhiteBox
                                : i == 1
                                    ? k == 0 // changed this from 1 to 0 since it did not align with the expected output image
                                        ? styles.WhiteBox
                                        : styles.SmallgreenBox
                                    : i == 2
                                        ? k == 2
                                            ? styles.SmallRedBox
                                            : styles.WhiteBox
                                        : styles.WhiteBox
                        }
                    ></View>
                ))}
            </View>
        );
    }

    for (let i = 0; i <= 5; i++) {
        blocks2.push(
            <View style={
                i === 2 ? styles.SmallgreenBox : styles.WhiteBox
            }>
            </View>
        );
        for (let i = 0; i <= 5; i++) {
            blocks3.push(
                <View style={styles.RowContainer1}>
                    {new Array(3).fill(null).map((_, k) => (
                        <View
                            style={
                                i == 0
                                    ? k == 1
                                        ? styles.SmallredBox
                                        : styles.WhiteBox
                                    : i == 1
                                        ? k == 1 // changed this from 1 to 0 since it did not align with the expected output image
                                            ? styles.SmallredBox
                                            : styles.WhiteBox
                                        : i == 2
                                            ? k == 2
                                                ? styles.SmallRedBox
                                                : styles.WhiteBox
                                            : styles.WhiteBo
                            }
                        ></View>
                    ))}
                </View>
            );
        }

    }
    return (
        <View style={styles.fullDashboard}>
            <View style={styles.ColumnContainer1}>
                <View style={styles.GreenBox}>
                    <Bottles></Bottles>
                </View>
                {blocks}
                <View style={styles.RedBox}>
                    <Bottles></Bottles>
                </View>
            </View>
            <View style={styles.ColumnContainer2}>
                <View style={styles.ColumnDirection}>
                    {blocks2}
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    MiddleBox: {
        borderColor: 'black', backgroundColor: 'Orange',
        height: 78, width: "100%",
        borderWidth: 1,
        marginLeft: -2,
        backgroundColor: 'white',

    },

    fullDashboard: {
        backgroundColor: 'white', borderColor: 'bisque',
        height: 392, width: 386,
        borderWidth: 20, borderRadius: 15,
        flexDirection: 'row',
    },

    ColumnContainer1: {
        height: 140, width: 140,
        flexDirection: 'column'
    },

    ColumnContainer2: {
        height: 23, width: 23,
        flexDirection: 'column'
    },

    RowContainer1: {
        flexDirection: 'row'
    },

    ColumnDirection: {
        flexDirection: 'column',
    },

    GreenBox: {
        backgroundColor: 'green', borderColor: 'forestgreen',
        height: 140.9, width: 140,
        borderWidth: 20,
        padding: 15,
        alignItems: 'center',
    },

    YellowBox: {
        backgroundColor: 'goldenrod', borderColor: 'gold',
        height: 140, width: 140,
        borderWidth: 20,
        padding: 15,
        alignItems: 'center',
    },

    RedBox: {
        backgroundColor: 'firebrick', borderColor: 'red',
        height: 142.9, width: 140,
        borderWidth: 20,
        padding: 15,
        alignItems: 'center',
    },

    BlueBox: {
        backgroundColor: 'darkblue', borderColor: 'blue',
        height: 142.5, width: 140,
        borderWidth: 20,
        padding: 15,
        alignItems: 'center',
    },


    WhiteBox: {
        backgroundColor: 'white', borderColor: 'black',
        height: 23, width: 23,
        borderWidth: 1,
    },

    SmallRedBox: {
        backgroundColor: 'red', borderColor: 'black',
        height: 23, width: 23,
        borderWidth: 1,
    },

    SmallgreenBox: {
        backgroundColor: 'forestgreen', borderColor: 'black',
        height: 23, width: 23,
        borderWidth: 1,
    },

    SmallYellowBox: {
        backgroundColor: 'gold', borderColor: 'black',
        height: 23, width: 23,
        borderWidth: 1,
    },

    SmallBlueBox: {
        backgroundColor: 'blue', borderColor: 'black',
        height: 23, width: 23,
        borderWidth: 1,
    },

});