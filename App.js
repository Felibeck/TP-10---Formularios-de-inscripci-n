import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Formulario from './src/components/Formulario';
import { colors, fonts } from './src/theme';

export default function App() {
  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <Text style={styles.kicker}>MEMBRESÍA EXCLUSIVA</Text>
          <Text style={styles.title}>SUCCESS WEB</Text>
          <View style={styles.divider} />
          <Text style={styles.tagline}>
            El primer paso hacia la abundancia es completar todos los campos
            obligatorios.
          </Text>
        </View>

        <Formulario />

        <Text style={styles.footer}>
          © {new Date().getFullYear()} Success Web — El éxito, ahora en formulario.
        </Text>
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 64,
    paddingBottom: 48,
  },
  hero: {
    alignItems: 'center',
    maxWidth: 520,
    marginBottom: 40,
  },
  kicker: {
    color: colors.gold,
    fontSize: 12,
    letterSpacing: 4,
    fontWeight: '600',
    marginBottom: 10,
  },
  title: {
    color: colors.cream,
    fontFamily: fonts.serif,
    fontSize: 44,
    letterSpacing: 6,
    fontWeight: '700',
    textAlign: 'center',
  },
  divider: {
    width: 64,
    height: 2,
    backgroundColor: colors.gold,
    marginTop: 18,
    marginBottom: 18,
  },
  tagline: {
    color: colors.creamSoft,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  footer: {
    color: colors.goldSoft,
    fontSize: 11,
    letterSpacing: 1,
    marginTop: 40,
    textAlign: 'center',
  },
});
