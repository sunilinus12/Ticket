import { View, Text, Dimensions, TouchableWithoutFeedback, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react';
import uuid from 'react-native-uuid';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


export default function Main() {
    const data = [7, 8, 9, 4, 5, 6, 1, 2, 3];

    const [text, setText] = useState("");
    const [ticket, setTicket] = useState([



    ]);
    const setValue = (item) => {
        if (text.length < 6) {
            setText(text + "" + item)
        }
        else {
            alert("MAX LIMIT OF TICKET NUMBER")
        }
    }

    const addTicket = (item) => {

        if (!item) {

            alert('Invalid Text', 'Add a task');
        }
        else {
            setTicket(prevTask => {
                return [...prevTask, { ticketno: item, id: uuid.v4() }]
            }
            )

        }


    }
    const deleteTicket = (id) => {

        setTicket(prevTask => {
            return (prevTask.filter(ticket => ticket.id != id))
        })



    }



    return (
        <>
            <View style={{ width: "100%", height: 65 / 100 * Dimensions.get("screen").height, backgroundColor: "black" }}>
                <View style={{ flex: 1.5, backgroundColor: "white" }}>
                    <Text style={{ width: "100%", height: "100%", color: "black", padding: "8%" }}   >
                        {text}
                    </Text>
                </View>
                {/* top button row */}
                <View style={{ flex: 9, backgroundColor: "white", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start", padding: 1.5 }}>

                    {
                        data.map((item, key) => {
                            return (
                                <TouchableWithoutFeedback onPress={() => setValue(item)} key={key}>
                                    <View style={{ width: 33 / 100 * (Dimensions.get("screen").width), height: "20.5%", backgroundColor: "white", justifyContent: "center", alignItems: "center", borderTopColor: "gray", borderRightColor: "gray", borderTopWidth: 1, borderRightWidth: 1 }}>
                                        <Text style={{ color: "black" }} >{item}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })
                    }

                    {/* // backspace */}
                    <TouchableWithoutFeedback onPress={() => { setText("") }} >
                        <View style={{ width: 33 / 100 * (Dimensions.get("screen").width), height: "20.5%", backgroundColor: "white", justifyContent: "center", alignItems: "center", borderTopColor: "gray", borderRightColor: "gray", borderTopWidth: 1, borderRightWidth: 1 }}>

                            <MaterialIcons name="backspace" size={24} color="black"
                            />
                        </View>
                    </TouchableWithoutFeedback>
                    {/* // 0 */}
                    <TouchableWithoutFeedback onPress={() => { setValue(0) }} >
                        <View style={{ width: 33 / 100 * (Dimensions.get("screen").width), height: "20.5%", backgroundColor: "white", justifyContent: "center", alignItems: "center", borderTopColor: "gray", borderRightColor: "gray", borderTopWidth: 1, borderRightWidth: 1 }}>

                            <Text style={{ color: "black" }} >0</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    {/* // delete */}
                    <TouchableWithoutFeedback onPress={() => { setText("") }} >
                        <View style={{ width: 33 / 100 * (Dimensions.get("screen").width), height: "20.5%", backgroundColor: "white", justifyContent: "center", alignItems: "center", borderTopColor: "gray", borderRightColor: "gray", borderTopWidth: 1, borderRightWidth: 1 }}>

                            <MaterialIcons name="delete" size={24} color="red"
                            />
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => { addTicket(text) }} >
                        <View style={{ width: "99.9%", height: "20%", backgroundColor: "white", justifyContent: "center", alignItems: "center", borderColor: "gray", borderWidth: 1 }}>
                            <Text style={{ color: "black" }} >+ Add Ticket</Text>
                        </View>
                    </TouchableWithoutFeedback>

                </View>
            </View>
            {/* tickets show */}
            <View style={{ width: "100%", height: 25 / 100 * Dimensions.get("screen").height, paddingTop: "2%", paddingLeft: "2%", backgroundColor: "#1869b5" }}>
                <Text style={{ color: "white" }}>Your Selected tickets :</Text>

                <View style={{ flex: 1, width: "100%", height: "90%", flexDirection: "row", paddingVertical: "2%" }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        {
                            ticket.map((item, key) => {
                                return (
                                    <View key={key} style={{ width: 45 / 100 * Dimensions.get("screen").width, height: "100%", backgroundColor: "white", marginHorizontal: 3,  paddingVertical: 10, justifyContent: "center" ,padding:"5%" }}>


                                        <TouchableWithoutFeedback onPress={() => { deleteTicket(item.id) }} >
                                            <View style={{ backgroundColor: "whitesmoke", width: 35, height: 35, justifyContent: "center", alignItems: "center", borderRadius: 15,alignSelf:"center" }}>
                                                <MaterialIcons name="delete" size={24} color="#de421f"

                                                />
                                            </View>
                                        </TouchableWithoutFeedback>
                                        <View style={{ padding: "1%" }}><Text style={{ color: "black" }}>Ticket_No:{item.ticketno}</Text>

                                        </View>
                                        <View style={{ padding: "1%" }}>
                                            <Text style={{ color: "black" }}>Ticket_Id: {item.id}
                                            </Text>
                                        </View>



                                    </View>

                                )
                            })
                        }

                    </ScrollView>
                </View>


            </View>

        </>


    )
}