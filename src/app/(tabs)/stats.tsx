import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function StatsScreen() {
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
        <View style={{ marginLeft: 16, marginRight: 4, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ width: 26, height: 26, backgroundColor: '#E1EFE8', borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
            <Ionicons name="flash" size={14} color="#435C50" />
          </View>
        </View>
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

  const consistencyData = [
    ['#435C50', '#708D81', '#C2E2F5', '#E2E8F0', '#435C50'],
    ['#C2E2F5', '#435C50', '#435C50', '#708D81', '#435C50'],
    ['#E2E8F0', '#708D81', '#435C50', '#435C50', '#708D81'],
    ['#435C50', '#E2E8F0', '#435C50', '#435C50', '#435C50'],
    ['#435C50', '#435C50', '#435C50', '#708D81', '#E2E8F0'],
    ['#E2E8F0', '#435C50', '#435C50', '#C2E2F5', '#C2E2F5'],
    ['#C2E2F5', '#C2E2F5', '#E2E8F0', '#435C50', '#435C50'],
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Your Learning Journey</Text>
        <Text style={styles.subtitle}>Track your progress and cognitive endurance across all decks.</Text>
      </View>

      {/* Cards Mastered */}
      <View style={styles.card}>
        <View style={styles.cardHeaderRow}>
          <Text style={styles.cardTitle}>Cards Mastered</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Last 7 Days</Text>
          </View>
        </View>

        {/* Note: Replacing wavy line chart with a beautiful bar chart since react-native-svg is not available */}
        <View style={styles.graphContainer}>
          {[40, 65, 90, 50, 70, 110, 85].map((height, i) => (
            <View key={i} style={styles.barColumn}>
              <View style={styles.barBackground}>
                <View style={[styles.barFill, { height: height }]} />
              </View>
            </View>
          ))}
        </View>
        <View style={styles.daysRow}>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <Text key={day} style={styles.dayText}>{day}</Text>
          ))}
        </View>
      </View>

      {/* Study Consistency */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Study Consistency</Text>
        <View style={styles.gridContainer}>
          {consistencyData.map((colColors, colIndex) => (
            <View key={colIndex} style={styles.gridColumn}>
              {colColors.map((color, rowIndex) => (
                <View key={rowIndex} style={[styles.gridSquare, { backgroundColor: color }]} />
              ))}
            </View>
          ))}
        </View>
        <Text style={styles.streakText}>
          Current Streak: <Text style={styles.streakBold}>12 Days</Text>
        </Text>
      </View>

      {/* Mastery by Category */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Mastery by Category</Text>
        
        <View style={styles.categoryRow}>
          <View style={styles.categoryHeader}>
            <Text style={styles.categoryName}>Science & Technology</Text>
            <Text style={styles.categoryPercent}>80%</Text>
          </View>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '80%' }]} />
          </View>
        </View>

        <View style={styles.categoryRow}>
          <View style={styles.categoryHeader}>
            <Text style={styles.categoryName}>Languages (Spanish)</Text>
            <Text style={styles.categoryPercent}>45%</Text>
          </View>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '45%' }]} />
          </View>
        </View>

        <View style={[styles.categoryRow, { marginBottom: 0 }]}>
          <View style={styles.categoryHeader}>
            <Text style={styles.categoryName}>Modern Architecture</Text>
            <Text style={styles.categoryPercent}>62%</Text>
          </View>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '62%' }]} />
          </View>
        </View>
      </View>

      {/* Peak Focus Hour */}
      <View style={styles.focusCard}>
        <Ionicons name="hardware-chip-outline" size={36} color="#3E5F75" style={styles.focusIcon} />
        <Text style={styles.focusTitle}>Peak Focus Hour</Text>
        <Text style={styles.focusDesc}>
          Your brain is most active at <Text style={styles.focusBold}>10:15 AM</Text>. Schedule your hardest sessions then for 25% better retention.
        </Text>
      </View>

      {/* Bottom Summary Cards */}
      <View style={styles.bottomCardsContainer}>
        <View style={styles.smallCard}>
          <Text style={styles.smallCardValue}>1,240</Text>
          <Text style={styles.smallCardLabel}>Total Cards</Text>
        </View>
        <View style={styles.smallCard}>
          <Text style={styles.smallCardValue}>42h</Text>
          <Text style={styles.smallCardLabel}>Study Time</Text>
        </View>
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
    fontWeight: '700',
    color: '#1A202C',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: '#4A5568',
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1A202C',
    marginBottom: 4,
  },
  badge: {
    backgroundColor: '#D6EAF8',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  badgeText: {
    color: '#5B86A5',
    fontSize: 12,
    fontWeight: '600',
  },
  graphContainer: {
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 8,
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  barColumn: {
    alignItems: 'center',
    width: 24,
  },
  barBackground: {
    width: 14,
    height: 120,
    backgroundColor: '#F0F4F2',
    borderRadius: 7,
    justifyContent: 'flex-end',
  },
  barFill: {
    width: 14,
    backgroundColor: '#435C50',
    borderRadius: 7,
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    paddingTop: 16,
    paddingHorizontal: 4,
  },
  dayText: {
    fontSize: 12,
    color: '#718096',
    fontWeight: '500',
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 20,
  },
  gridColumn: {
    flexDirection: 'column',
    gap: 8,
  },
  gridSquare: {
    width: 16,
    height: 16,
    borderRadius: 3,
  },
  streakText: {
    fontSize: 13,
    color: '#4A5568',
  },
  streakBold: {
    fontWeight: '700',
    color: '#435C50',
  },
  categoryRow: {
    marginBottom: 18,
    marginTop: 12,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    color: '#1A202C',
    fontWeight: '500',
  },
  categoryPercent: {
    fontSize: 14,
    color: '#435C50',
    fontWeight: '600',
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
  focusCard: {
    backgroundColor: '#D4E7F5',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    alignItems: 'center',
  },
  focusIcon: {
    marginBottom: 12,
  },
  focusTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3E5F75',
    marginBottom: 8,
  },
  focusDesc: {
    fontSize: 14,
    color: '#486C87',
    textAlign: 'center',
    lineHeight: 22,
  },
  focusBold: {
    fontWeight: '700',
    color: '#3E5F75',
  },
  bottomCardsContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 40,
  },
  smallCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  smallCardValue: {
    fontSize: 32,
    fontWeight: '700',
    color: '#435C50',
    marginBottom: 6,
  },
  smallCardLabel: {
    fontSize: 13,
    color: '#4A5568',
    fontWeight: '500',
  },
});
