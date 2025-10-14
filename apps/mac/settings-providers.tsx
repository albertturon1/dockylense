import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';

const SettingsProviders = () => {
  const handleConnectSlack = () => {
    Linking.openURL('/api/auth/slack');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Data Providers</Text>
        <Text style={styles.subtitle}>
          Connect your workspace tools to enhance search capabilities across all
          your professional data.
        </Text>
      </View>

      {/* Security Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerIcon}>🛡️</Text>
        <View style={styles.bannerText}>
          <Text style={styles.bannerTitle}>End-to-end encryption enabled</Text>
          <Text style={styles.bannerDesc}>
            All data is encrypted on your device before storage. Only you can
            decrypt and search your content.
          </Text>
        </View>
      </View>

      {/* Available Providers */}
      <Text style={styles.sectionTitle}>Available Providers</Text>

      {/* Slack Provider Card */}
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>Slack</Text>
          </View>
          <View style={styles.cardText}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Slack</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Recommended</Text>
              </View>
            </View>
            <Text style={styles.cardDesc}>
              Search across channels, direct messages, and shared files. Find
              conversations and decisions instantly.
            </Text>
            <View style={styles.benefits}>
              <View style={styles.benefit}>
                <Text style={styles.benefitIcon}>🔍</Text>
                <Text style={styles.benefitText}>Semantic search</Text>
              </View>
              <View style={styles.benefit}>
                <Text style={styles.benefitIcon}>🔒</Text>
                <Text style={styles.benefitText}>Encrypted locally</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleConnectSlack}>
          <Text style={styles.buttonIcon}>+</Text>
          <Text style={styles.buttonText}>Connect</Text>
        </TouchableOpacity>
      </View>

      {/* GitHub Provider Card (Coming Soon) */}
      <View style={[styles.card, styles.disabled]}>
        <View style={styles.cardContent}>
          <View style={styles.logoContainerGitHub}>
            <Text style={styles.logo}>GitHub</Text>
          </View>
          <View style={styles.cardText}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>GitHub</Text>
              <View style={styles.badgeOutline}>
                <Text style={styles.badgeOutlineText}>Coming Soon</Text>
              </View>
            </View>
            <Text style={styles.cardDesc}>
              Search code, issues, pull requests, and discussions across your
              repositories.
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.button, styles.disabledButton]}
          disabled>
          <Text style={styles.buttonIcon}>+</Text>
          <Text style={styles.buttonText}>Connect</Text>
        </TouchableOpacity>
      </View>

      {/* Jira Provider Card (Coming Soon) */}
      <View style={[styles.card, styles.disabled]}>
        <View style={styles.cardContent}>
          <View style={styles.logoContainerJira}>
            <Text style={styles.logo}>Jira</Text>
          </View>
          <View style={styles.cardText}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Jira</Text>
              <View style={styles.badgeOutline}>
                <Text style={styles.badgeOutlineText}>Coming Soon</Text>
              </View>
            </View>
            <Text style={styles.cardDesc}>
              Find tickets, project updates, and team activities across all your
              boards.
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.button, styles.disabledButton]}
          disabled>
          <Text style={styles.buttonIcon}>+</Text>
          <Text style={styles.buttonText}>Connect</Text>
        </TouchableOpacity>
      </View>

      {/* Separator */}
      <View style={styles.separator} />

      {/* Connected Providers Section (Empty State) */}
      <Text style={styles.sectionTitle}>Connected Providers</Text>
      <View style={styles.card}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>✅</Text>
          <Text style={styles.emptyTitle}>No providers connected yet</Text>
          <Text style={styles.emptyDesc}>
            Connect your first provider above to start aggregating and searching
            your professional data.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#000',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#666',
  },
  banner: {
    flexDirection: 'row',
    padding: 16,
    borderWidth: 1,
    borderColor: '#007AFF',
    backgroundColor: '#E6F3FF',
    borderRadius: 8,
    marginBottom: 32,
  },
  bannerIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  bannerText: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  bannerDesc: {
    marginTop: 4,
    fontSize: 14,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginBottom: 16,
  },
  card: {
    padding: 24,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardContent: {
    flexDirection: 'row',
    flex: 1,
  },
  logoContainer: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#4A154B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  logoContainerGitHub: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#24292e',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  logoContainerJira: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#0052CC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  logo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
  },
  cardText: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginRight: 8,
  },
  badge: {
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    color: '#000',
  },
  badgeOutline: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  badgeOutlineText: {
    fontSize: 12,
    color: '#666',
  },
  cardDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  benefits: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  benefit: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 8,
  },
  benefitIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  benefitText: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIcon: {
    fontSize: 14,
    color: '#FFF',
    marginRight: 4,
  },
  buttonText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: '500',
  },
  disabled: {
    opacity: 0.6,
  },
  disabledButton: {
    backgroundColor: '#CCC',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 32,
  },
  emptyState: {
    alignItems: 'center',
    padding: 32,
  },
  emptyIcon: {
    fontSize: 24,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginBottom: 4,
  },
  emptyDesc: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    maxWidth: 300,
  },
});

export default SettingsProviders;
