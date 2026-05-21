import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/src/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.greeting}>Good morning, Alex.</Text>
          <Text style={styles.subGreeting}>Ready to grow your mind today?</Text>
        </View>

        {/* Day Streak Card */}
        <View style={styles.card}>
          <View style={styles.streakIconContainer}>
            <Ionicons name="flame-outline" size={26} color="#5C85A8" />
          </View>
          <Text style={styles.streakNumber}>12</Text>
          <Text style={styles.streakLabel}>Day Streak</Text>
        </View>

        {/* Daily Goal Card */}
        <View style={styles.card}>
          <View style={styles.goalRow}>
            {/* Circular Progress Placeholder */}
            <View style={styles.progressCircle}>
              <Text style={styles.progressCircleText}>75%</Text>
            </View>
            <View style={styles.goalTextContainer}>
              <Text style={styles.goalTitle}>Daily Goal</Text>
              <Text style={styles.goalDescription}>
                38 of 50 cards reviewed.{"\n"}Keep up the momentum!
              </Text>
            </View>
          </View>
        </View>

        {/* Recently Studied Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recently Studied</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Horizontal Cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {/* Card 1 */}
          <View style={styles.studyCard}>
            <View style={styles.studyCardHeader}>
              <View style={styles.studyIconContainer}>
                <Ionicons name="language" size={22} color="#1A1C1E" />
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Language</Text>
              </View>
            </View>
            <Text style={styles.studyCardTitle}>Advanced Spanish</Text>
            <View style={styles.progressBarBackground}>
              <View style={[styles.progressBarFill, { width: '82%' }]} />
            </View>
            <View style={styles.studyCardFooter}>
              <Text style={styles.studyCardStats}>142 Cards</Text>
              <Text style={styles.studyCardStats}>82% Mastered</Text>
            </View>
          </View>

          {/* Card 2 */}
          <View style={[styles.studyCard, { marginRight: 20 }]}>
            <View style={styles.studyCardHeader}>
              <View style={[styles.studyIconContainer, { backgroundColor: '#E8ECEF' }]}>
                <Ionicons name="flask-outline" size={22} color="#1A1C1E" />
              </View>
              <View style={[styles.badge, { backgroundColor: '#E8ECEF' }]}>
                <Text style={[styles.badgeText, { color: '#5C6366' }]}>Science</Text>
              </View>
            </View>
            <Text style={styles.studyCardTitle}>Neuroscience</Text>
            <View style={styles.progressBarBackground}>
              <View style={[styles.progressBarFill, { width: '45%' }]} />
            </View>
            <View style={styles.studyCardFooter}>
              <Text style={styles.studyCardStats}>88 Cards</Text>
              <Text style={styles.studyCardStats}>45% Mastered</Text>
            </View>
          </View>
        </ScrollView>

        {/* Unlock Focus Mode */}
        <View style={styles.focusCard}>
          <Text style={styles.focusTitle}>Unlock Focus Mode</Text>
          <Text style={styles.focusDescription}>
            Experience deep concentration with our distraction-free study environment designed for cognitive flow.
          </Text>
          <TouchableOpacity style={styles.learnMoreBtn}>
            <Text style={styles.learnMoreText}>Learn More</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* Floating Study Now Button */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="play-circle-outline" size={24} color="#FFF" />
        <Text style={styles.fabText}>Study Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7F9",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100, // Make room for FAB
  },
  headerContainer: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1C2A24",
    marginBottom: 6,
  },
  subGreeting: {
    fontSize: 16,
    color: Colors.neutral,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E8ECEF",
    alignItems: "center",
  },
  streakIconContainer: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#DDF0FE",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  streakNumber: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2C4035", 
    marginBottom: 4,
  },
  streakLabel: {
    fontSize: 14,
    color: "#1C2A24",
    fontWeight: "500",
  },
  goalRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  progressCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 6,
    borderColor: '#3A5647',
    borderLeftColor: "#E8ECEF", 
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    transform: [{ rotate: '-45deg' }], 
  },
  progressCircleText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#2C4035",
    transform: [{ rotate: '45deg' }], 
  },
  goalTextContainer: {
    flex: 1,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1C2A24",
    marginBottom: 6,
  },
  goalDescription: {
    fontSize: 14,
    color: Colors.neutral,
    lineHeight: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1C2A24",
  },
  viewAll: {
    fontSize: 14,
    color: "#4A7C99",
    fontWeight: "600",
  },
  horizontalScroll: {
    overflow: "visible",
    marginBottom: 24,
  },
  studyCard: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    marginRight: 16,
    width: 280,
    borderWidth: 1,
    borderColor: "#E8ECEF",
  },
  studyCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  studyIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#DDF0FE",
    justifyContent: "center",
    alignItems: "center",
  },
  badge: {
    backgroundColor: "#DDF0FE",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    color: "#4A7C99",
    fontWeight: "600",
  },
  studyCardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1C2A24",
    marginBottom: 16,
  },
  progressBarBackground: {
    height: 6,
    backgroundColor: "#E8ECEF",
    borderRadius: 3,
    marginBottom: 12,
  },
  progressBarFill: {
    height: 6,
    backgroundColor: "#3A5647", 
    borderRadius: 3,
  },
  studyCardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  studyCardStats: {
    fontSize: 14,
    color: Colors.neutral,
  },
  focusCard: {
    backgroundColor: "#5C7F6D", 
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
  },
  focusTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 12,
  },
  focusDescription: {
    fontSize: 15,
    color: "#E8EFEC", 
    lineHeight: 22,
    marginBottom: 20,
  },
  learnMoreBtn: {
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  learnMoreText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3A5647", 
  },
  fab: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#3A5647", 
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  fabText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
