import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function DecksScreen() {
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
        <TouchableOpacity style={{ marginLeft: 16 }}>
          <Ionicons name="arrow-back" size={24} color="#435C50" />
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
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Medical Terminology</Text>
        <Text style={styles.subtitle}>Advanced anatomy and physiological prefixes</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>TOTAL CARDS</Text>
          <Text style={styles.statValue}>128</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>MASTERY</Text>
          <View style={styles.masteryRow}>
            <Text style={styles.statValueRow}>64%</Text>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBarFill, { width: '64%' }]} />
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.startButton}>
        <Ionicons name="play" size={18} color="#FFFFFF" style={styles.playIcon} />
        <Text style={styles.startButtonText}>Start Session</Text>
      </TouchableOpacity>

      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>Cards in Deck</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={18} color="#435C50" />
          <Text style={styles.addText}>Add New</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsList}>
        {[
          {
            title: 'Tachycardia',
            desc: 'A condition that makes your heart beat more than 100 times per minute.'
          },
          {
            title: 'Hypertension',
            desc: 'A condition in which the force of the blood against the artery walls is too high.'
          },
          {
            title: 'Gastroenteritis',
            desc: 'Inflammation of the lining of the stomach and intestines.'
          },
          {
            title: 'Hemostasis',
            desc: 'The stopping of a flow of blood.'
          },
          {
            title: 'Hypodermic',
            desc: 'Relating to the region immediately beneath the skin.'
          },
        ].map((card, index) => (
          <View key={index} style={styles.cardItem}>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardDesc}>{card.desc}</Text>
            </View>
            <TouchableOpacity hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
              <Ionicons name="pencil-outline" size={20} color="#718096" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7F8',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginTop: 8,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1A202C',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: '#4A5568',
    lineHeight: 22,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#4A5568',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  statValue: {
    fontSize: 32,
    fontWeight: '600',
    color: '#3F5E50',
    marginTop: 8,
  },
  statValueRow: {
    fontSize: 32,
    fontWeight: '600',
    color: '#3F5E50',
  },
  masteryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  progressBarContainer: {
    flex: 1,
    height: 4,
    backgroundColor: '#E2E8F0',
    borderRadius: 2,
    marginLeft: 8,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#3F5E50',
    borderRadius: 2,
  },
  startButton: {
    backgroundColor: '#3F5E50',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    marginBottom: 32,
  },
  playIcon: {
    marginRight: 8,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1A202C',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#3F5E50',
    marginLeft: 4,
  },
  cardsList: {
    gap: 12,
  },
  cardItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cardTextContainer: {
    flex: 1,
    paddingRight: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A202C',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 13,
    color: '#4A5568',
    lineHeight: 18,
  },
});