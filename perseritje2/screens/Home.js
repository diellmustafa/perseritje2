import React,{useEffect, useState} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const Home = () => {
    const [teDhenat, setTeDhenat]=useState([])
    const thirrjaAPI=async()=>{
        const pergjigjja=await fetch("https://jsonplaceholder.typicode.com/posts")
        const tedhenatNew= await pergjigjja.json()
        setTeDhenat(tedhenatNew)
    }
    useEffect(()=>{
        thirrjaAPI();
    },[])
    return <>
        <Text>Home</Text>
        <FlatList
        data={teDhenat}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>{
            return <View>{item.title}</View>
        }}
        />
    </>
}

export default Home;