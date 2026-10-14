import {Tabs} from 'expo-router'

export default function TabsLayout(){
    return(
        <Tabs screenOptions = {{
                tabBarActiveTintColor:"blue",
                tabBarInactiveTintColor:'gray'
            }}>
            <Tabs.Screen name='index'
            options={{
                title: 'Home',headerShown:false 
            }} />
            <Tabs.Screen name='About'
            options={{
                title: 'About',headerShown:false
            }} />
        </Tabs>
    )
}