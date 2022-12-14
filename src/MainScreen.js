import React from 'react';
import format from "date-fns/format";
import { StyleSheet, View, FlatList } from 'react-native';
import { List } from 'react-native-paper';


const memos = [
    {
        text: "メモメモメモ",
        createdAt: 15855747000000, 
    },
    {
        text: "長いメモメモメモメモメモメモメモメモメモメモ",
        createdAt: 1585567500000,
    },
];

export const MainScreen = () => {
    return (
        <View style = {styles.container}>
            <FlatList
                style={styles.list}
                data={memos}
                keyExtractor={item => `${item.createdAt}`}
                renderItem={({ item }) => (
                    <List.Item
                        title={item.text}
                        titleNumberOfLines={5}
                        description={
                            `作成日時: ${format(item.createdAt, 'yyyy.MM.dd HH:mm')}`
                        }
                        descriptionStyle={{ textAlign: 'right' }}
                    />    
                )}
            />    
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    list: {
        flex: 1,
    }
  });
  