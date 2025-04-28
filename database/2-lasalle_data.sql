USE ClubDeportivoLaSalle;

-- Script para insertar datos de muestra en la base de datos ClubDeportivoLaSalle

-- Insertar temporada
INSERT INTO seasons (name) VALUES ('2024-2025');

-- Insertar equipos (3 femeninos y 3 masculinos)
INSERT INTO teams (season_id, name, category, gender, is_active) VALUES 
(1, 'LaSalle Eagles', 'senior', 'female', 1),
(1, 'LaSalle Warriors', 'junior', 'female', 1),
(1, 'LaSalle Stars', 'cadet', 'female', 1),
(1, 'LaSalle Lions', 'senior', 'male', 1),
(1, 'LaSalle Tigers', 'junior', 'male', 1),
(1, 'LaSalle Panthers', 'cadet', 'male', 1);

-- Insertar equipos rivales
INSERT INTO rivals (name) VALUES 
('CB Barcelona'),
('Madrid Baloncesto'),
('Valencia Basket'),
('Zaragoza BC'),
('Sevilla Hoops'),
('Málaga Sharks');

-- Insertar usuarios (para entrenadores y jugadores)
-- Entrenadores (4)
INSERT INTO users (email, password, role, in_date) VALUES
('coach1@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'coach', '2024-08-01'),
('coach2@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'coach', '2024-08-01'),
('coach3@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'coach', '2024-08-01'),
('coach4@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'coach', '2024-08-01');

-- Jugadores (42 usuarios - 7 por cada uno de los 6 equipos)
-- Equipo 1 - LaSalle Eagles (femenino senior)
INSERT INTO users (email, password, role, in_date) VALUES
('player1@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player2@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player3@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player4@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player5@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player6@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player7@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01');

-- Equipo 2 - LaSalle Warriors (femenino junior)
INSERT INTO users (email, password, role, in_date) VALUES
('player8@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player9@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player10@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player11@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player12@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player13@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player14@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01');

-- Equipo 3 - LaSalle Stars (femenino cadet)
INSERT INTO users (email, password, role, in_date) VALUES
('player15@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player16@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player17@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player18@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player19@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player20@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player21@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01');

-- Equipo 4 - LaSalle Lions (masculino senior)
INSERT INTO users (email, password, role, in_date) VALUES
('player22@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player23@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player24@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player25@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player26@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player27@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player28@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01');

-- Equipo 5 - LaSalle Tigers (masculino junior)
INSERT INTO users (email, password, role, in_date) VALUES
('player29@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player30@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player31@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player32@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player33@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player34@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player35@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01');

-- Equipo 6 - LaSalle Panthers (masculino cadet)
INSERT INTO users (email, password, role, in_date) VALUES
('player36@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player37@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player38@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player39@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player40@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player41@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01'),
('player42@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'player', '2024-09-01');

-- Insertar 5 usuarios para miembros
INSERT INTO users (email, password, role, in_date) VALUES
('member1@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'member', '2024-09-01'),
('member2@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'member', '2024-09-01'),
('member3@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'member', '2024-09-01'),
('member4@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'member', '2024-09-01'),
('member5@lasalle.edu', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK', 'member', '2024-09-01');

-- Insertar entrenadores
INSERT INTO coaches (user_id, nif, gender, name, surname1, surname2, birthdate, phone, title, state) VALUES
(1, '12345678A', 'female', 'Laura', 'Martínez', 'García', '1985-05-15', '600123456', 'level 3', 'in'),
(2, '23456789B', 'male', 'Carlos', 'González', 'Pérez', '1990-10-20', '600234567', 'level 2', 'in'),
(3, '34567890C', 'female', 'Ana', 'Rodríguez', 'López', '1988-03-25', '600345678', 'level 2', 'in'),
(4, '45678901D', 'male', 'Javier', 'Fernández', 'Sánchez', '1992-07-12', '600456789', 'level 1', 'in');

-- Asignar entrenadores a equipos
INSERT INTO coaches_teams (coach_id, team_id, role) VALUES
(1, 1, 'head'),      -- Laura es entrenadora principal del equipo femenino senior
(2, 1, 'assistant'), -- Carlos es asistente del equipo femenino senior
(1, 2, 'head'),      -- Laura también entrena al equipo femenino junior
(3, 3, 'head'),      -- Ana entrena al equipo femenino cadet
(2, 4, 'head'),      -- Carlos es entrenador principal del equipo masculino senior
(4, 4, 'assistant'), -- Javier es asistente del equipo masculino senior
(3, 5, 'head'),      -- Ana también entrena al equipo masculino junior
(4, 6, 'head');      -- Javier entrena al equipo masculino cadet

-- Insertar jugadores para el equipo 1 (LaSalle Eagles - femenino senior)
INSERT INTO players (user_id, team_id, nif, gender, name, surname1, surname2, birthdate, phone, address, position, height, hand, status) VALUES
(5, 1, '50000001E', 'female', 'María', 'López', 'García', '2000-01-15', '610111111', 'Calle Mayor 1, Madrid', 'point guard', 175, 'right-handed', 'in'),
(6, 1, '50000002F', 'female', 'Carmen', 'Martínez', 'Sánchez', '2001-02-20', '610222222', 'Avenida Central 2, Madrid', 'shooting guard', 178, 'right-handed', 'in'),
(7, 1, '50000003G', 'female', 'Lucía', 'Fernández', 'Martín', '2000-03-25', '610333333', 'Plaza España 3, Madrid', 'small forward', 182, 'left-handed', 'in'),
(8, 1, '50000004H', 'female', 'Elena', 'García', 'Rodríguez', '2001-04-10', '610444444', 'Calle Sol 4, Madrid', 'power forward', 185, 'right-handed', 'in'),
(9, 1, '50000005I', 'female', 'Paula', 'Pérez', 'González', '2000-05-05', '610555555', 'Avenida Luna 5, Madrid', 'center', 190, 'right-handed', 'in'),
(10, 1, '50000006J', 'female', 'Sofía', 'Gómez', 'Díaz', '2001-06-15', '610666666', 'Calle Estrella 6, Madrid', 'shooting guard', 176, 'left-handed', 'in'),
(11, 1, '50000007K', 'female', 'Alba', 'Sánchez', 'Álvarez', '2000-07-20', '610777777', 'Avenida Mar 7, Madrid', 'point guard', 173, 'right-handed', 'in');

-- Insertar jugadores para el equipo 2 (LaSalle Warriors - femenino junior)
INSERT INTO players (user_id, team_id, nif, gender, name, surname1, surname2, birthdate, phone, address, position, height, hand, status) VALUES
(12, 2, '50000008L', 'female', 'Marta', 'Romero', 'Moreno', '2005-08-12', '610888888', 'Calle Alta 8, Madrid', 'center', 183, 'right-handed', 'in'),
(13, 2, '50000009M', 'female', 'Sara', 'Navarro', 'Ruiz', '2006-09-18', '610999999', 'Avenida Baja 9, Madrid', 'power forward', 180, 'right-handed', 'in'),
(14, 2, '50000010N', 'female', 'Julia', 'Torres', 'Castro', '2005-10-23', '611000000', 'Plaza Mayor 10, Madrid', 'small forward', 176, 'left-handed', 'in'),
(15, 2, '50000011O', 'female', 'Andrea', 'Ortega', 'Flores', '2006-11-05', '611111111', 'Calle Ancha 11, Madrid', 'shooting guard', 172, 'right-handed', 'in'),
(16, 2, '50000012P', 'female', 'Claudia', 'Molina', 'Serrano', '2005-12-15', '611222222', 'Avenida Larga 12, Madrid', 'point guard', 170, 'right-handed', 'in'),
(17, 2, '50000013Q', 'female', 'Laura', 'Delgado', 'Ramos', '2006-01-25', '611333333', 'Calle Norte 13, Madrid', 'center', 182, 'left-handed', 'in'),
(18, 2, '50000014R', 'female', 'Cristina', 'Ortiz', 'Medina', '2005-02-14', '611444444', 'Avenida Sur 14, Madrid', 'power forward', 178, 'right-handed', 'in');

-- Insertar jugadores para el equipo 3 (LaSalle Stars - femenino cadet)
INSERT INTO players (user_id, team_id, nif, gender, name, surname1, surname2, birthdate, phone, address, position, height, hand, status) VALUES
(19, 3, '50000015S', 'female', 'Nuria', 'Reyes', 'Guerrero', '2007-03-20', '611555555', 'Plaza Norte 15, Madrid', 'point guard', 165, 'right-handed', 'in'),
(20, 3, '50000016T', 'female', 'Patricia', 'Lozano', 'Cano', '2008-04-11', '611666666', 'Calle Este 16, Madrid', 'shooting guard', 168, 'right-handed', 'in'),
(21, 3, '50000017U', 'female', 'Raquel', 'Mendoza', 'Prieto', '2007-05-22', '611777777', 'Avenida Oeste 17, Madrid', 'small forward', 172, 'right-handed', 'in'),
(22, 3, '50000018V', 'female', 'Marina', 'Cruz', 'Herrera', '2008-06-13', '611888888', 'Calle Sur 18, Madrid', 'power forward', 175, 'left-handed', 'in'),
(23, 3, '50000019W', 'female', 'Diana', 'Cabrera', 'Marín', '2007-07-24', '611999999', 'Avenida Este 19, Madrid', 'center', 180, 'right-handed', 'in'),
(24, 3, '50000020X', 'female', 'Irene', 'Sáez', 'Vega', '2008-08-15', '612000000', 'Plaza Oeste 20, Madrid', 'small forward', 173, 'right-handed', 'in'),
(25, 3, '50000021Y', 'female', 'Lorena', 'Rubio', 'Román', '2007-09-26', '612111111', 'Calle Centro 21, Madrid', 'point guard', 168, 'left-handed', 'in');

-- Insertar jugadores para el equipo 4 (LaSalle Lions - masculino senior)
INSERT INTO players (user_id, team_id, nif, gender, name, surname1, surname2, birthdate, phone, address, position, height, hand, status) VALUES
(26, 4, '50000022Z', 'male', 'Daniel', 'Jiménez', 'Muñoz', '2000-10-10', '612222222', 'Avenida Principal 22, Madrid', 'center', 200, 'right-handed', 'in'),
(27, 4, '50000023A', 'male', 'Alejandro', 'Blanco', 'Alonso', '2001-11-05', '612333333', 'Calle Nueva 23, Madrid', 'power forward', 195, 'right-handed', 'in'),
(28, 4, '50000024B', 'male', 'Pablo', 'Morales', 'Santos', '2000-12-15', '612444444', 'Plaza Vieja 24, Madrid', 'small forward', 192, 'left-handed', 'in'),
(29, 4, '50000025C', 'male', 'Sergio', 'Iglesias', 'Castillo', '2001-01-20', '612555555', 'Calle Antigua 25, Madrid', 'shooting guard', 188, 'right-handed', 'in'),
(30, 4, '50000026D', 'male', 'Jorge', 'Hidalgo', 'Cortes', '2000-02-25', '612666666', 'Avenida Moderna 26, Madrid', 'point guard', 185, 'right-handed', 'in'),
(31, 4, '50000027E', 'male', 'David', 'Gallego', 'Rojas', '2001-03-15', '612777777', 'Plaza Central 27, Madrid', 'power forward', 196, 'left-handed', 'in'),
(32, 4, '50000028F', 'male', 'Javier', 'Bravo', 'Soto', '2000-04-18', '612888888', 'Calle Principal 28, Madrid', 'center', 205, 'right-handed', 'in');

-- Insertar jugadores para el equipo 5 (LaSalle Tigers - masculino junior)
INSERT INTO players (user_id, team_id, nif, gender, name, surname1, surname2, birthdate, phone, address, position, height, hand, status) VALUES
(33, 5, '50000029G', 'male', 'Miguel', 'Pardo', 'Suárez', '2005-05-12', '612999999', 'Avenida Alta 29, Madrid', 'point guard', 180, 'right-handed', 'in'),
(34, 5, '50000030H', 'male', 'Hugo', 'Vidal', 'Esteban', '2006-06-23', '613000000', 'Calle Baja 30, Madrid', 'shooting guard', 183, 'right-handed', 'in'),
(35, 5, '50000031I', 'male', 'Adrián', 'Sierra', 'Hernández', '2005-07-14', '613111111', 'Plaza Grande 31, Madrid', 'small forward', 187, 'left-handed', 'in'),
(36, 5, '50000032J', 'male', 'Marcos', 'Pastor', 'Gutiérrez', '2006-08-25', '613222222', 'Calle Corta 32, Madrid', 'power forward', 192, 'right-handed', 'in'),
(37, 5, '50000033K', 'male', 'Óscar', 'Vargas', 'Méndez', '2005-09-16', '613333333', 'Avenida Larga 33, Madrid', 'center', 198, 'right-handed', 'in'),
(38, 5, '50000034L', 'male', 'Alberto', 'León', 'Santiago', '2006-10-27', '613444444', 'Plaza Pequeña 34, Madrid', 'shooting guard', 185, 'left-handed', 'in'),
(39, 5, '50000035M', 'male', 'Raúl', 'Peña', 'Fuentes', '2005-11-18', '613555555', 'Calle Estrecha 35, Madrid', 'small forward', 188, 'right-handed', 'in');

-- Insertar jugadores para el equipo 6 (LaSalle Panthers - masculino cadet)
INSERT INTO players (user_id, team_id, nif, gender, name, surname1, surname2, birthdate, phone, address, position, height, hand, status) VALUES
(40, 6, '50000036N', 'male', 'Rubén', 'Benítez', 'Campos', '2007-12-19', '613666666', 'Avenida Ancha 36, Madrid', 'center', 190, 'right-handed', 'in'),
(41, 6, '50000037O', 'male', 'Diego', 'Bermejo', 'Vega', '2008-01-10', '613777777', 'Calle Grande 37, Madrid', 'power forward', 185, 'right-handed', 'in'),
(42, 6, '50000038P', 'male', 'Mario', 'Carrasco', 'Calvo', '2007-02-21', '613888888', 'Plaza Circular 38, Madrid', 'small forward', 180, 'left-handed', 'in'),
(43, 6, '50000039Q', 'male', 'Iván', 'Herrero', 'Serra', '2008-03-12', '613999999', 'Calle Redonda 39, Madrid', 'shooting guard', 178, 'right-handed', 'in'),
(44, 6, '50000040R', 'male', 'Víctor', 'Aguilar', 'Pascual', '2007-04-23', '614000000', 'Avenida Recta 40, Madrid', 'point guard', 175, 'right-handed', 'in'),
(45, 6, '50000041S', 'male', 'Eduardo', 'Soler', 'Nieto', '2008-05-14', '614111111', 'Plaza Cuadrada 41, Madrid', 'power forward', 182, 'left-handed', 'in'),
(46, 6, '50000042T', 'male', 'Samuel', 'Ferrer', 'Santana', '2007-06-25', '614222222', 'Calle Curva 42, Madrid', 'center', 187, 'right-handed', 'in');

-- Insertar datos de los miembros
INSERT INTO member (user_id, nif, name, surname, phone, family) VALUES
(47, '51000001A', 'Antonio', 'Gómez Hernández', '615111111', 1),  -- Es miembro familiar
(48, '51000002B', 'Beatriz', 'Sánchez López', '615222222', 0),    -- No es miembro familiar
(49, '51000003C', 'Francisco', 'Ruiz Martín', '615333333', 1),    -- Es miembro familiar
(50, '51000004D', 'Teresa', 'Díaz Serrano', '615444444', 0),      -- No es miembro familiar
(51, '51000005E', 'Roberto', 'Moreno Vázquez', '615555555', 1);   -- Es miembro familiar

-- Insertar partidos para cada equipo (3 por equipo)
-- Partidos del equipo 1 (LaSalle Eagles - femenino senior)
INSERT INTO matches (season_id, team_id, rival_id, date, home_or_away, home_score, away_score, general_comment) VALUES
(1, 1, 1, '2024-10-10 18:00:00', 'home', 75, 68, 'Gran partido de las Eagles con una remontada en el último cuarto'),
(1, 1, 2, '2024-10-17 20:00:00', 'away', 72, 80, 'Derrota ajustada en un partido muy disputado'),
(1, 1, 3, '2024-10-24 18:00:00', 'home', 85, 70, 'Victoria contundente con gran actuación de María López');

-- Partidos del equipo 2 (LaSalle Warriors - femenino junior)
INSERT INTO matches (season_id, team_id, rival_id, date, home_or_away, home_score, away_score, general_comment) VALUES
(1, 2, 4, '2024-10-11 17:00:00', 'away', 65, 70, 'Buen partido defensivo pero faltó acierto en el tiro exterior'),
(1, 2, 5, '2024-10-18 16:30:00', 'home', 78, 60, 'Dominio claro desde el inicio con gran juego colectivo'),
(1, 2, 6, '2024-10-25 17:00:00', 'away', 68, 72, 'Derrota ajustada en los últimos segundos');

-- Partidos del equipo 3 (LaSalle Stars - femenino cadet)
INSERT INTO matches (season_id, team_id, rival_id, date, home_or_away, home_score, away_score, general_comment) VALUES
(1, 3, 1, '2024-10-12 10:00:00', 'home', 62, 55, 'Victoria trabajada con buena defensa en la segunda parte'),
(1, 3, 2, '2024-10-19 11:30:00', 'away', 50, 67, 'Derrota ante un rival muy superior físicamente'),
(1, 3, 3, '2024-10-26 10:00:00', 'home', 70, 65, 'Gran remontada en el último cuarto liderada por Nuria Reyes');

-- Partidos del equipo 4 (LaSalle Lions - masculino senior)
INSERT INTO matches (season_id, team_id, rival_id, date, home_or_away, home_score, away_score, general_comment) VALUES
(1, 4, 4, '2024-10-12 20:00:00', 'away', 88, 92, 'Partido muy igualado que se decidió en la prórroga'),
(1, 4, 5, '2024-10-19 19:30:00', 'home', 95, 80, 'Gran actuación ofensiva con Daniel Jiménez como MVP'),
(1, 4, 6, '2024-10-26 20:00:00', 'away', 90, 85, 'Victoria importante en una cancha difícil');

-- Partidos del equipo 5 (LaSalle Tigers - masculino junior)
INSERT INTO matches (season_id, team_id, rival_id, date, home_or_away, home_score, away_score, general_comment) VALUES
(1, 5, 1, '2024-10-13 17:30:00', 'home', 82, 75, 'Muy buen ritmo de juego y acierto en el tiro exterior'),
(1, 5, 2, '2024-10-20 18:00:00', 'away', 70, 85, 'Mal partido defensivo, concediendo demasiados rebotes'),
(1, 5, 3, '2024-10-27 17:30:00', 'home', 88, 70, 'Victoria contundente con gran juego colectivo');

-- Partidos del equipo 6 (LaSalle Panthers - masculino cadet)
INSERT INTO matches (season_id, team_id, rival_id, date, home_or_away, home_score, away_score, general_comment) VALUES
(1, 6, 4, '2024-10-13 12:00:00', 'away', 65, 68, 'Derrota ajustada tras un mal inicio de partido'),
(1, 6, 5, '2024-10-20 11:00:00', 'home', 75, 60, 'Victoria clara con buen juego interior de Rubén Benítez'),
(1, 6, 6, '2024-10-27 12:00:00', 'away', 70, 72, 'Partido muy disputado que se decidió en los últimos segundos');

-- Insertar comentarios de entrenadores sobre jugadores en los partidos (matches_feedbacks)
-- Comentarios para jugadores del equipo 1 en su primer partido
INSERT INTO matches_feedbacks (match_id, coach_id, player_id, comment) VALUES
(1, 1, 1, 'Excelente dirección de juego y liderazgo en los momentos clave'),
(1, 1, 2, 'Muy buen porcentaje de tiro, especialmente en el último cuarto'),
(1, 1, 3, 'Necesita mejorar la defensa al hombre'),
(1, 2, 4, 'Gran trabajo en el rebote defensivo'),
(1, 2, 5, 'Dominó la zona pero debe mejorar el tiro libre');

-- Comentarios para jugadores del equipo 2 en su primer partido
INSERT INTO matches_feedbacks (match_id, coach_id, player_id, comment) VALUES
(4, 1, 12, 'Excelente juego interior pero faltó más agresividad en el rebote'),
(4, 1, 13, 'Buena defensa pero debe mejorar la selección de tiro'),
(4, 1, 14, 'Necesita ganar más confianza en el tiro exterior');

-- Comentarios para jugadores del equipo 3 en su primer partido
INSERT INTO matches_feedbacks (match_id, coach_id, player_id, comment) VALUES
(7, 3, 19, 'Gran dirección de juego en los momentos decisivos'),
(7, 3, 20, 'Excelente defensa pero debe mejorar el tiro de media distancia'),
(7, 3, 21, 'Muy buen trabajo en ambos lados de la cancha');

-- Comentarios para jugadores del equipo 4 en su primer partido
INSERT INTO matches_feedbacks (match_id, coach_id, player_id, comment) VALUES
(10, 2, 26, 'Dominó la zona pero cometió demasiadas faltas'),
(10, 2, 27, 'Gran capacidad reboteadora pero debe mejorar la finalización'),
(10, 4, 28, 'Excelente tiro exterior pero necesita mejorar en defensa');

-- Comentarios para jugadores del equipo 5 en su primer partido
INSERT INTO matches_feedbacks (match_id, coach_id, player_id, comment) VALUES
(13, 3, 33, 'Gran dirección de juego y acierto en momentos clave'),
(13, 3, 34, 'Excelente porcentaje de tiro pero debe mejorar el pase'),
(13, 3, 35, 'Muy buena defensa pero necesita ser más agresivo en ataque');

-- Comentarios para jugadores del equipo 6 en su primer partido
INSERT INTO matches_feedbacks (match_id, coach_id, player_id, comment) VALUES
(16, 4, 40, 'Buen trabajo en el rebote pero debe mejorar el tiro libre'),
(16, 4, 41, 'Necesita mejorar la defensa al hombre'),
(16, 4, 42, 'Gran capacidad atlética pero debe mejorar la toma de decisiones');