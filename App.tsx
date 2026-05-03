import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Компоненти
import { CustomInput } from './components/CustomInput';
import { PrimaryButton } from './components/PrimaryButton';
import { OutlineButton } from './components/OutlineButton';
import SmallButton from './components/SmallButton';
import { Card } from './components/Card';
import PlasmaIcon from './components/PlasmaIcon';

const Tab = createBottomTabNavigator();

// ========== КОМПОНЕНТ ЗАГОЛОВКА ЗІ СТРІЛКОЮ ==========
function CustomHeader({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <View style={styles.customHeader}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      {/* Пустий View для балансу */}
      <View style={{ width: 40 }} />
    </View>
  );
}

// ========== ДАНІ ДЛЯ КАЛЕНДАРЯ ==========
const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
const dates = [null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const times = ['09:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00'];

// ========== ЕКРАН ВХОДУ/РЕЄСТРАЦІЇ ==========
function AuthScreen({ onLogin }: { onLogin: () => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <ScrollView style={styles.authContainer}>
      <Text style={styles.logo}>PlasmaDonate</Text>
      <PlasmaIcon size={50} />
      <Card>
        <Text style={styles.authTitle}>{isLogin ? 'Вхід' : 'Реєстрація'}</Text>
        <CustomInput placeholder="Email" value={email} onChangeText={setEmail} />
        <CustomInput placeholder="Пароль" value={password} onChangeText={setPassword} secureTextEntry />
        {!isLogin && (
          <>
            <CustomInput placeholder="Ім'я" value={firstName} onChangeText={setFirstName} />
            <CustomInput placeholder="Прізвище" value={lastName} onChangeText={setLastName} />
          </>
        )}
        <PrimaryButton title={isLogin ? "УВІЙТИ" : "ЗАРЕЄСТРУВАТИСЯ"} onPress={onLogin} />
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.switchText}>{isLogin ? 'Немає акаунту? Зареєструватися' : 'Вже маєте акаунт? Увійти'}</Text>
        </TouchableOpacity>
      </Card>
    </ScrollView>
  );
}

// ========== ЗАПИС НА ЗДАЧУ ПЛАЗМИ ==========
function DonateScreen({ navigation }: any) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <ScrollView style={styles.container}>
      <CustomHeader title="Запис на здачу плазми" onBack={() => navigation.goBack()} />

      <Card>
      <Text style={styles.cardTitle}>📅 ОБЕРІТЬ ДАТУ:</Text>
        <View style={styles.calendarHeader}>
          <TouchableOpacity><Text style={styles.arrowBlack}>{'<'}</Text></TouchableOpacity>
          <Text style={styles.monthTitleBlack}>КВІТЕНЬ 2026</Text>
          <TouchableOpacity><Text style={styles.arrowBlack}>{'>'}</Text></TouchableOpacity>
        </View>
        <View style={styles.weekDaysRow}>
          {weekDays.map(day => <Text key={day} style={styles.weekDayTextBold}>{day}</Text>)}
        </View>
        <View style={styles.datesGrid}>
          {dates.map((date, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dateBoxBig,
                date !== null && selectedDate === date && styles.selectedDateBoxBig,
                date === null && styles.emptyDateBox
              ]}
              onPress={() => date !== null && setSelectedDate(date)}
              disabled={date === null}
            >
              {date !== null && (
                <Text style={[styles.dateTextBig, selectedDate === date && styles.selectedDateTextBig]}>{date}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </Card>

      <Card>
        <Text style={styles.cardTitle}>⏰ ОБЕРІТЬ ЧАС:</Text>
        <View style={styles.timeGrid}>
          {times.map(time => (
            <TouchableOpacity
              key={time}
              style={[styles.timeBoxBig, selectedTime === time && styles.selectedTimeBoxBig]}
              onPress={() => setSelectedTime(time)}
            >
              <Text style={[styles.timeTextBig, selectedTime === time && styles.selectedTimeTextBig]}>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Card>

      <PrimaryButton title="ПІДТВЕРДИТИ ЗАПИС" onPress={() => { }} />
    </ScrollView>
  );
}

// ========== ГОЛОВНИЙ ЕКРАН ==========
function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeLeft}>Вітаємо, User!</Text>

      <Text style={styles.sectionTitle}>🎯 НАСТУПНА ЗДАЧА ПЛАЗМИ:</Text>
      <Card>
        <View style={styles.dateTimeRow}>
          <Text style={styles.dateTimeText}>Пʼятниця, 25 квітня об 11:30</Text>
        </View>
        <View style={styles.centerRow}>
          <SmallButton title="Скасувати" onPress={() => { }} />
          <Text style={styles.slash}>/</Text>
          <SmallButton title="Перенести" onPress={() => { }} />
        </View>
      </Card>

      <Text style={styles.sectionTitle}>📊 ВАША АКТИВНІСТЬ:</Text>
      <Card>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Всього здач:</Text>
          <Text style={styles.statValue}>2</Text>
        </View>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>За 12 місяців:</Text>
          <Text style={styles.statValue}>2</Text>
        </View>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>За цей рік:</Text>
          <Text style={styles.statValue}>2</Text>
        </View>
      </Card>

      <View style={styles.centerInfo}>
        <Text style={styles.centerName}>🏥 Plasmaspende-Zentrum in Fulda</Text>
        <Text style={styles.centerAddress}>Адреса: Bahnhofstraße 2, 36037 Fulda</Text>
        <Text style={styles.centerPhone}>Номер телефону: 0661 4805000</Text>
      </View>

      <PrimaryButton title="ЗАПИСАТИСЯ НА ЗДАЧУ ПЛАЗМИ" onPress={() => { }} />
    </ScrollView>
  );
}

// ========== БОНУСИ ТА ВИПЛАТИ ==========
function BonusesScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <CustomHeader title="Бонуси та виплати" onBack={() => navigation.goBack()} />

      <Text style={styles.sectionTitle}>💰 ВИПЛАТА ЗА ЗДАЧУ:</Text>
      <Card>
        <View style={styles.payoutRow}>
          <Text style={styles.bonusAmount}>Одна здача:</Text>
          <Text style={styles.amountLarge}>25€</Text>
        </View>
      </Card>

      <Text style={styles.sectionTitle}>🎯 БОНУСНІ ПРОГРАМИ:</Text>

      <Card>
        <Text style={styles.bonusTitle}>📅 4 здачі за 28 днів</Text>
        <Text style={styles.bonusAmount}>Бонус: <Text style={styles.bonusRed}>+20€</Text></Text>
        <Text style={styles.bonusRemaining}>Ще 2 здачі до бонусу 20€</Text>
      </Card>

      <Card>
        <Text style={styles.bonusTitle}>📅 6 здач за 90 днів</Text>
        <Text style={styles.bonusAmount}>Бонус: <Text style={styles.bonusRed}>+30€</Text></Text>
        <Text style={styles.bonusRemaining}>Ще 4 здачі до бонусу 30€</Text>
      </Card>

      <Card>
        <Text style={styles.bonusTitle}>🙎🏻‍♂️ ПРИВЕДИ ДРУГА</Text>
        <Text style={styles.bonusAmount}>За реєстрацію: <Text style={styles.bonusRed}>10€</Text></Text>
        <Text style={styles.bonusAmount}>За 5 здач друга: <Text style={styles.bonusRed}>40€</Text></Text>
      </Card>
    </ScrollView>
  );
}

// ========== ПРОФІЛЬ ==========
function ProfileScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <CustomHeader title="Мій профіль" onBack={() => navigation.goBack()} />
      <PlasmaIcon size={50} />
      <Text style={styles.welcomeCenter}>Вітаємо, User!</Text>
      
      <Card>
        <Text style={styles.cardTitle}>👤 ОСОБИСТІ ДАНІ</Text>
        <Text style={styles.infoText}>Номер донора: 101090</Text>
        <Text style={styles.infoText}>Дата народження: 01.01.2000</Text>
        <Text style={styles.infoText}>Email: user@gmail.com</Text>
        <Text style={styles.infoText}>Телефон: +491712345678</Text>
      </Card>

      <Card>
        <Text style={styles.cardTitle}>📜 ІСТОРІЯ ЗДАЧ</Text>
        <View style={styles.historyRow}><Text>1) 01.03.2025</Text><Text style={styles.boldText}>25€</Text></View>
        <View style={styles.historyRow}><Text>2) 29.03.2025</Text><Text style={styles.boldText}>25€</Text></View>
        <Text style={styles.historyLink}>ВСЯ ІСТОРІЯ →</Text>
      </Card>

      <OutlineButton title="РЕДАГУВАТИ ПРОФІЛЬ" onPress={() => { }} />
      <OutlineButton title="ВИЙТИ" onPress={() => { }} />
    </ScrollView>
  );
}

// ========== ОСНОВНІ ВКЛАДКИ ==========
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          const icons: Record<string, string> = {
            Home: '🏠',
            Donate: '📅',
            Bonuses: '🎁',
            Profile: '👤'
          };
          return <Text style={{ fontSize: 40, color }}>{icons[route.name]}</Text>;
        },
        tabBarActiveTintColor: '#D32F2F',
        tabBarInactiveTintColor: '#9E9E9E',
        tabBarStyle: { backgroundColor: '#FFFFFF', height: 90, paddingBottom: 8, paddingTop: 8 },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Donate" component={DonateScreen} />
      <Tab.Screen name="Bonuses" component={BonusesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// ========== ГОЛОВНИЙ КОМПОНЕНТ ==========
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <AuthScreen onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}

// ========== СТИЛІ ==========
const styles = StyleSheet.create({
  // AuthScreen
  authContainer: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 16 },
  logo: { fontSize: 32, fontWeight: 'bold', color: '#000000', textAlign: 'center', marginTop: 60, marginBottom: 40 },
  authTitle: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  switchText: { fontSize: 14, color: '#757575', textAlign: 'center', marginTop: 16 },

  // Загальні
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  welcomeLeft: { fontSize: 24, fontWeight: 'bold', color: '#212121', marginBottom: 20, textAlign: 'left' },
  cardTitle: { fontSize: 14, fontWeight: 'bold', color: '#757575', marginBottom: 8 },
  sectionTitle: { fontSize: 12, fontWeight: 'bold', color: '#757575', marginBottom: 8, marginTop: 4 },

  // Кастомний заголовок
  customHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 0,        // ← прибрано зайвий відступ зверху
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  backButton: { paddingRight: 16 },
  backArrow: { fontSize: 24, fontWeight: 'bold', color: '#000000' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#000000', textAlign: 'center', flex: 1 },

  // Головна
  dateTimeRow: { marginBottom: 12 },
  dateTimeText: { fontSize: 18, fontWeight: 'bold', color: '#212121' },
  centerRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 },
  slash: { fontSize: 14, fontWeight: 'bold', color: '#D32F2F' },
  statRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  statLabel: { fontSize: 14, fontWeight: 'bold', color: '#212121' },
  statValue: { fontSize: 16, fontWeight: 'bold', color: '#212121' },

  // Календар
  calendarHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  arrowBlack: { fontSize: 24, fontWeight: 'bold', color: '#000000' },
  monthTitleBlack: { fontSize: 24, fontWeight: 'bold', color: '#000000' },
  weekDaysRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12 },
  weekDayTextBold: { fontSize: 20, fontWeight: 'bold', color: '#757575', width: 44, textAlign: 'center' },
  datesGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' },
  dateBoxBig: { width: 44, height: 44, borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 8, justifyContent: 'center', alignItems: 'center', margin: 2 },
  selectedDateBoxBig: { borderColor: '#D32F2F', borderWidth: 2, backgroundColor: '#FFEBEE' },
  emptyDateBox: { backgroundColor: 'transparent', borderColor: 'transparent' },
  dateTextBig: { fontSize: 20, fontWeight: 'bold', color: '#212121' },
  selectedDateTextBig: { color: '#D32F2F' },

  // Час
  timeGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' },
  timeBoxBig: { width: 100, height: 44, borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 8, justifyContent: 'center', alignItems: 'center', margin: 4 },
  selectedTimeBoxBig: { borderColor: '#D32F2F', borderWidth: 2, backgroundColor: '#FFEBEE' },
  timeTextBig: { fontSize: 20, fontWeight: 'bold', color: '#212121' },
  selectedTimeTextBig: { color: '#D32F2F' },

  // Бонуси
amountLarge: { fontSize: 20, fontWeight: 'bold', color: '#212121' },
bonusTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 4, color: '#212121' },
bonusAmount: { fontSize: 18, fontWeight: 'bold', color: '#212121', marginBottom: 4 },
bonusRed: { color: '#D32F2F' },
bonusRemaining: { fontSize: 16, fontWeight: 'bold', color: '#212121', marginTop: 8 },
payoutRow: { flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', },


  // Профіль
  infoText: { fontSize: 14, color: '#212121', marginBottom: 4 },
  historyRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  historyLink: { fontSize: 14, fontWeight: 'bold', color: '#212121', marginTop: 8 },
  boldText: { fontWeight: 'bold' },
  welcomeCenter: { fontSize: 24, fontWeight: 'bold', color: '#212121', marginBottom: 20, textAlign: 'center' },

  // Інформація про центр
  centerInfo: { marginTop: 20, marginBottom: 16, alignItems: 'center' },
  centerName: { fontSize: 18, fontWeight: 'bold', color: '#D32F2F', marginBottom: 4 },
  centerAddress: { fontSize: 14, fontWeight: 'bold', color: '#212121', marginBottom: 2 },
  centerPhone: { fontSize: 14, fontWeight: 'bold', color: '#212121' },
});