import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function StudyScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'MindFlow',
      headerTitleStyle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#435C50',
      },
      headerLeft: () => (
        <TouchableOpacity style={{ marginLeft: 16, marginRight: 8 }}>
          <Ionicons name="close" size={28} color="#4A5568" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 16 }}>
          <View style={styles.headerLightningBtn}>
            <Ionicons name="flash" size={14} color="#435C50" />
          </View>
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#F4F7F8',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerShadowVisible: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        
        {/* Session Progress */}
        <View style={styles.progressContainer}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>Session Progress</Text>
            <Text style={styles.progressValue}>12 / 20 Cards</Text>
          </View>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '60%' }]} />
          </View>
        </View>

        {/* Flashcard Area */}
        <View style={styles.card}>
          <Text style={styles.cardHeader}>QUESTION</Text>
          
          <Text style={styles.cardQuestion}>
            What is the 'Spacing Effect' in cognitive psychology and how does it impact long-term retention?
          </Text>
          
          <TouchableOpacity style={styles.hintButton}>
            <Ionicons name="bulb-outline" size={16} color="#5B86A5" style={{ marginRight: 6 }} />
            <Text style={styles.hintText}>View Hint</Text>
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.flipButton}>
            <Ionicons name="albums-outline" size={20} color="#FFFFFF" style={{ marginRight: 8, transform: [{ rotate: '90deg' }] }} />
            <Text style={styles.flipButtonText}>Flip Card</Text>
          </TouchableOpacity>

          <View style={styles.secondaryActionsRow}>
            <TouchableOpacity style={styles.secondaryButton}>
              <Ionicons name="close" size={20} color="#C53030" style={{ marginRight: 6 }} />
              <Text style={styles.secondaryButtonText}>Not Yet</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryButton}>
              <Ionicons name="checkmark" size={20} color="#2F855A" style={{ marginRight: 6 }} />
              <Text style={styles.secondaryButtonText}>Got it</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F7F8',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 40,
  },
  headerLightningBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#EEF7F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C6E3D4',
  },
  progressContainer: {
    marginTop: 8,
    marginBottom: 32,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#4A5568',
  },
  progressValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#435C50',
  },
  progressBarBg: {
    height: 6,
    backgroundColor: '#E2E8F0',
    borderRadius: 3,
  },
  progressBarFill: {
    height: 6,
    backgroundColor: '#435C50',
    borderRadius: 3,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 32,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 12,
    elevation: 2,
    flex: 1,
    justifyContent: 'center',
    marginBottom: 32,
  },
  cardHeader: {
    fontSize: 12,
    letterSpacing: 2,
    fontWeight: '600',
    color: '#4A5568',
    marginBottom: 24,
    textTransform: 'uppercase',
  },
  cardQuestion: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1A202C',
    textAlign: 'center',
    lineHeight: 38,
    marginBottom: 40,
  },
  hintButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F6FA',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  hintText: {
    color: '#5B86A5',
    fontSize: 13,
    fontWeight: '600',
  },
  actionsContainer: {
    width: '100%',
  },
  flipButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#435C50',
    paddingVertical: 18,
    borderRadius: 14,
    marginBottom: 16,
  },
  flipButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  secondaryActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  secondaryButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8ECEF',
    paddingVertical: 16,
    borderRadius: 12,
  },
  secondaryButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#4A5568',
  },
});