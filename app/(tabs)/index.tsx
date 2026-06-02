import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '@/components/themed-text';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './_style';
import { View, Text, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native';
import Animated, { FadeOut, LinearTransition } from 'react-native-reanimated';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

export default function Home() {
  const [input, setInput] = useState('');
  const [allNotes, setAllNotes] = useState([]); // [] matlab ek khali list (array)
  const [isWriting, setIsWriting] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const addNote = () => {
    if (input.length > 0) {
      // Purani list lo aur usme naya input jod do
      setAllNotes([...allNotes, { id: Date.now().toString(), text: input, pinned: false }]);
      setInput('');
      setIsWriting(false); // 👈 Note save hote hi pop-up band kar dega
    }
  };

  const togglePin = (idToPin) => {
    const updatedNotes = allNotes.map((note) =>
      note.id === idToPin
        ? { ...note, pinned: !note.pinned }// pinned toggle ho jayega
        : note
    );
    setAllNotes(updatedNotes);
  };
  const filteredPinned = allNotes
    .filter(note => note.pinned)
    .filter(note => note.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredNotes = allNotes.filter((note) =>
    note.text.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const sortedAndFiltered = filteredNotes.sort((a, b) =>
    b.pinned - a.pinned
  );

  const deleteNote = (idToDelete) => {
    // Jo note delete karna hai uske id ke alawa sab notes ko nayi list mein daal do
    const newNotes = allNotes.filter((note) => note.id !== idToDelete);
    setAllNotes(newNotes);// Nayi saaf bachi hui list ko memory mein daal diya
  }; // <--- Yeh bracket lagana zaroori hai!


  return (
    <LinearGradient colors={['#d4fc79', '#96e6a1', '#fbc2eb']} style={styles.container}>
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          {isSearching ? (
            <>
              <TextInput
                style={styles.searchInput}
                placeholder="Search notes..."
                placeholderTextColor="#888"
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoFocus={true}
              />
              <TouchableOpacity onPress={() => { setIsSearching(false); setSearchQuery('') }}>
                <Ionicons name="close" size={28} color='#ed548f' />
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.headerTitle}>Hello Bhai! 🚀</Text>
              <TouchableOpacity onPress={() => setIsSearching(true)}>
                <Ionicons name='search' size={26} color="#ed548f" />
              </TouchableOpacity>
            </>
          )}
        </View>

        <FlatList
          style={{ width: '94%', overflow: 'visible' }} // List ko thoda chhota karne ke liye, taki screen ke edges se gap rahe
          contentContainerStyle={{ alignItems: 'center' }} // List ke items ko center mein align karne ke liye
          data={sortedAndFiltered}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ReanimatedSwipeable
              containerStyle={{ width: '100%', alignItems: 'center' }}
              renderRightActions={() => (
                <View style={styles.deleteSwipeBackground}>
                  <Text style={styles.deleteSwipeText}>Delete 🗑️</Text>
                </View>
              )}
              onSwipeableOpen={(direction) => { deleteNote(item.id) }}
            >
              <Animated.View
                style={styles.noteCard}
                exiting={FadeOut}
                layout={LinearTransition}
              >
                <Text style={styles.noteText}>{index + 1}. {item.text}</Text>

                <TouchableOpacity onPress={() => togglePin(item.id)} style={{ marginLeft: 'auto' }}>
                  <Text style={{ fontSize: 18 }}>{item.pinned ? '📌' : '🤍'}</Text>
                </TouchableOpacity>
              </Animated.View>
            </ReanimatedSwipeable>
          )}
        /> {/* <--- FlatList end*/}
        <TouchableOpacity style={styles.fab} onPress={() => setIsWriting(true)}>
          <ThemedText style={styles.fabText}>+</ThemedText>
        </TouchableOpacity>

        <Modal visible={isWriting} animationType="slide" transparent={true} statusBarTranslucent={true}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}> New Note ✍️</Text>

              <TextInput
                style={styles.modalInput}
                placeholder={"Yaha kuch likho..."}
                placeholderTextColor="#888"
                value={input}
                onChangeText={setInput}
                autoFocus={true} // Taki pop-up khulte hi keyboard khud aa jaye
                multiline={true} // Taki bada note likh sako
              />

              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.cancelButton} onPress={() => setIsWriting(false)}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton} onPress={addNote}>
                  <Text style={styles.saveButtonText}>Save Note</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </LinearGradient>
  );
};

