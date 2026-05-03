PlasmaDonate - React Native Components

Аналіз дизайну

У процесі аналізу дизайну мобільного застосунку було визначено основні UI-компоненти, які повторюються на різних екранах:

1. Input Field - поле вводу (email, пароль, ім'я, прізвище)
2. Primary Button - основна червона кнопка (#D32F2F)
3. Outline Button - рамкова кнопка (#B71C1C)
4. Small Button - мала рамкова кнопка (#D32F2F)
5. Card - картка-контейнер
6. Typography - текстові стилі
7. Tab Bar - нижня навігація

---

Завдання 2: Створення компонентів

Список компонентів

| № | Компонент | Файл | Пропси |
|---|-----------|------|--------|
| 1 | CustomInput | CustomInput.tsx | placeholder, value, onChangeText, secureTextEntry |
| 2 | PrimaryButton | PrimaryButton.tsx | title, onPress, disabled |
| 3 | OutlineButton | OutlineButton.tsx | title, onPress, disabled |
| 4 | SmallButton | SmallButton.tsx | title, onPress |
| 5 | Card | Card.tsx | children |
| 6 | ScreenContainer | ScreenContainer.tsx | children, scrollable |

Використані технології:
- View, Text, TextInput, TouchableOpacity
- StyleSheet.create()
- Flexbox (flexDirection, justifyContent, alignItems)
- Platform.select() / Platform.OS

---

Завдання 3: Адаптивність

Використані підходи:
- useWindowDimensions для динамічних розмірів
- Ширина компонентів: 85-90% від ширини екрану (макс. 400px)
- Підтримка горизонтальної орієнтації (landscape)
- Платформозалежні тіні

Адаптовані компоненти:

| Компонент | Адаптація |
|-----------|-----------|
| CustomInput | 85% (макс 400px) |
| PrimaryButton | 85% (макс 400px) |
| OutlineButton | 85% (макс 400px) |
| Card | 90% (макс 400px) |
| ScreenContainer | Центрування, підтримка landscape |

---

Завдання 4: Додаткові вимоги

Модульність:
Кожен компонент в окремому файлі.

Пропси:
Всі компоненти приймають динамічні дані через пропси.

Константи:
Створено файли в constants/:
- colors.ts - кольори
- sizes.ts - розміри та відступи
- typography.ts - шрифти
- index.ts - централізований експорт

Чистота коду:
- Відсутні магічні числа
- Додані коментарі
- Зрозумілі назви

---

Навігація

- Використано @react-navigation/bottom-tabs
- Екрани: Головна, Запис, Бонуси, Профіль
- Кастомний заголовок зі стрілкою повернення

---

Скріншоти: 
- Вхід: (./screenshots/1Login.png)
- Реєстрація: (./screenshots/2Registration.png)
- Головний екран: (./screenshots/3Home.png)
- Екран запису: (./screenshots/4Appointment.png)
- Екран бонусів: (./screenshots/5Bonuses.png)
- Екран профілю: (./screenshots/6Profile.png)

---

Підтримувані пристрої

iPhone (всі моделі)
Android (різні роздільності)
Планшети (iPad, Android Tablets)
Горизонтальна орієнтація
Вертикальна орієнтація