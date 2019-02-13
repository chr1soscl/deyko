CREATE TABLE IF NOT EXISTS app_roles (
  role_id INT NOT NULL,
  role_name VARCHAR(45) NULL,
  role_desc VARCHAR(90) NULL,
  active INT NOT NULL,
  PRIMARY KEY (role_id));
  
CREATE TABLE IF NOT EXISTS app_users (
  user_id INT NOT NULL,
  user_login VARCHAR(50) NULL,
  user_password VARCHAR(50) NULL,
  user_first_name VARCHAR(60) NULL,
  user_last_name VARCHAR(60) NULL,
  user_role_id INT NULL,
  active INT NOT NULL,
  PRIMARY KEY (user_id),
  CONSTRAINT user_role_id
    FOREIGN KEY (user_role_id)
    REFERENCES app_roles (role_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS phases (
  phase_id INT NOT NULL,
  phase_name VARCHAR(45) NULL,
  phase_desc VARCHAR(90) NULL,
  active INT NOT NULL,
  PRIMARY KEY (phase_id));
  
CREATE TABLE IF NOT EXISTS projects (
  project_id INT NOT NULL,
  project_code VARCHAR(10) NOT NULL,
  project_name VARCHAR(45) NULL,
  project_desc VARCHAR(90) NULL,
  active INT NOT NULL,
  PRIMARY KEY (project_id));

CREATE TABLE IF NOT EXISTS months (
  month_id INT NOT NULL,
  month_name VARCHAR(45) NULL,
  month_short_name VARCHAR(45) NULL,
  PRIMARY KEY (month_id));

CREATE TABLE IF NOT EXISTS release_type (
  release_type_id INT NOT NULL,
  release_type_name VARCHAR(45) NULL,
  PRIMARY KEY (release_type_id));

CREATE TABLE IF NOT EXISTS releases (
  release_id INT NOT NULL,
  release_name VARCHAR(45) NULL,
  release_description VARCHAR(45) NULL,
  release_type_id INT NULL,
  year_name INT NULL,
  month_id INT NULL,
  active INT NOT NULL,
  PRIMARY KEY (release_id),
  CONSTRAINT month_id
    FOREIGN KEY (month_id)
    REFERENCES months (month_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT release_type_id
    FOREIGN KEY (release_type_id)
    REFERENCES release_type (release_type_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS bug_criticality (
  criticality_id INT NOT NULL,
  criticality_name VARCHAR(45) NULL,
  criticality_desc VARCHAR(90) NULL,
  PRIMARY KEY (criticality_id));

CREATE TABLE IF NOT EXISTS bug_status (
  status_id INT NOT NULL,
  status_name VARCHAR(45) NULL,
  status_name_desc VARCHAR(90) NULL,
  PRIMARY KEY (status_id));
  
  
INSERT INTO app_roles (role_id, role_name, role_desc, active) VALUES (1, 'admin', 'Administrator role.', 1);
INSERT INTO app_roles (role_id, role_name, role_desc, active) VALUES (2, 'developer', 'Developer role.', 1);
INSERT INTO app_roles (role_id, role_name, role_desc, active) VALUES (3, 'tester', 'Tester role.', 1);

COMMIT;


INSERT INTO app_users (user_id, user_login, user_password, user_first_name, user_last_name, user_role_id, active) VALUES (1, 'admin', 'admin', 'Crisoforo', 'Lopez', 1, 1);
INSERT INTO app_users (user_id, user_login, user_password, user_first_name, user_last_name, user_role_id, active) VALUES (2, 'dev1', 'dev1', 'Tamara', 'Esquivel', 2, 1);
INSERT INTO app_users (user_id, user_login, user_password, user_first_name, user_last_name, user_role_id, active) VALUES (3, 'test1', 'test1', 'Jorge', 'Morales', 3, 1);

COMMIT;


INSERT INTO phases (phase_id, phase_name, phase_desc, active) VALUES (1, 'SIT', 'System Integration Testing.', 1);
INSERT INTO phases (phase_id, phase_name, phase_desc, active) VALUES (2, 'UAT', 'User Acceptance Testing.', 1);
INSERT INTO phases (phase_id, phase_name, phase_desc, active) VALUES (3, 'REG', 'Regression Testing.', 1);
INSERT INTO phases (phase_id, phase_name, phase_desc, active) VALUES (4, 'SAN', 'Sanity Testing.', 0);

COMMIT;

INSERT INTO projects (project_id, project_code, project_name, project_desc, active) VALUES (1, 'ANG025', 'Angular UI migration','Angular UI migration effort 2020.', 1);
INSERT INTO projects (project_id, project_code, project_name, project_desc, active) VALUES (2, 'PHY652', 'Phyton machines', 'Phyton machines project 2020.', 1);
INSERT INTO projects (project_id, project_code, project_name, project_desc, active) VALUES (3, 'RES632', 'Rest Node.js migration', 'Rest Node.js projects of second trimester 2020', 1);
INSERT INTO projects (project_id, project_code, project_name, project_desc, active) VALUES (4, 'RES645', 'Java Rest legacy', 'Maintenance of legacy rest api projects in Java.', 1);

COMMIT;


INSERT INTO months (month_id, month_name, month_short_name) VALUES (1, 'Januray', 'JAN');
INSERT INTO months (month_id, month_name, month_short_name) VALUES (2, 'February', 'FEB');
INSERT INTO months (month_id, month_name, month_short_name) VALUES (3, 'March', 'MAR');
INSERT INTO months (month_id, month_name, month_short_name) VALUES (4, 'April', 'APR');
INSERT INTO months (month_id, month_name, month_short_name) VALUES (5, 'May', 'MAY');
INSERT INTO months (month_id, month_name, month_short_name) VALUES (6, 'June', 'JUN');
INSERT INTO months (month_id, month_name, month_short_name) VALUES (7, 'July', 'JUL');
INSERT INTO months (month_id, month_name, month_short_name) VALUES (8, 'August', 'AUG');
INSERT INTO months (month_id, month_name, month_short_name) VALUES (9, 'September', 'SEP');
INSERT INTO months (month_id, month_name, month_short_name) VALUES (10, 'Octoboer', 'OCT');
INSERT INTO months (month_id, month_name, month_short_name) VALUES (11, 'November', 'NOV');
INSERT INTO months (month_id, month_name, month_short_name) VALUES (12, 'December', 'DEC');

COMMIT;


INSERT INTO release_type (release_type_id, release_type_name) VALUES (1, 'monthly');
INSERT INTO release_type (release_type_id, release_type_name) VALUES (2, 'semestral');
INSERT INTO release_type (release_type_id, release_type_name) VALUES (3, 'quaterly');
INSERT INTO release_type (release_type_id, release_type_name) VALUES (4, 'yearly');

COMMIT;


INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (1, 'JAN2019', 'January 2019', 2, 2019, 1, 1);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (2, 'FEB2019', 'Februrary 2019', 1, 2019, 2, 1);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (3, 'MAR2019', 'March 2019', 1, 2019, 3, 1);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (4, 'APR2019', 'April 2019', 1, 2019, 4, 1);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (5, 'MAY2019', 'May 2019', 1, 2019, 5, 1);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (6, 'JUN2019', 'June 2019', 1, 2019, 6, 1);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (7, 'JUL2019', 'July 2019', 2, 2019, 7, 1);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (8, 'AUG2019', 'August 2019', 1, 2019, 8, 1);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (9, 'SEP2019', 'September 2019', 1, 2019, 9, 1);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (10, 'OCT2019', 'October 2019', 1, 2019, 10, 1);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (11, 'NOV2019', 'November 2019', 1, 2019, 11, 1);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (12, 'DEC2019', 'December 2019', 1, 2019, 12, 1);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (13, 'JAN2020', 'January 2020', 2, 2020, 1, 0);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (14, 'FEB2020', 'February 2020', 1, 2020, 2, 0);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (15, 'MAR2020', 'March 2020', 1, 2020, 3, 0);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (16, 'APR2020', 'April 2020', 1, 2020, 4, 0);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (17, 'MAY2020', 'May 2020', 1, 2020, 5, 0);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (18, 'JUN2020', 'June 2020', 1, 2020, 6, 0);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (19, 'JUL2020', 'July 2020', 2, 2020, 7, 0);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (20, 'AUG2020', 'August 2020', 1, 2020, 8, 0);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (21, 'SEP2020', 'September 2020', 1, 2020, 9, 0);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (22, 'OCT2020', 'October 2020', 1, 2020, 10, 0);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (23, 'NOV2020', 'November 2020', 1, 2020, 11, 0);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (24, 'DEC2020', 'December 2020', 1, 2020, 12, 0);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (25, 'JAN2021', 'Januray 2021', 2, 2021, 1, 1);
INSERT INTO releases (release_id, release_name, release_description, release_type_id, year_name, month_id, active) VALUES (26, 'FEB2021', 'February 2021', 1, 2021, 2, 1);

COMMIT;


INSERT INTO bug_criticality (criticality_id, criticality_name, criticality_desc) VALUES (1, 'high', 'Bug must be closed or cancelled within two days.');
INSERT INTO bug_criticality (criticality_id, criticality_name, criticality_desc) VALUES (2, 'medium', 'Bug can be closed or cancelled within one weeks.');
INSERT INTO bug_criticality (criticality_id, criticality_name, criticality_desc) VALUES (3, 'low', 'Bug can be closed or cancelled within two weeks.');

COMMIT;


INSERT INTO bug_status (status_id, status_name, status_name_desc) VALUES (1, 'open', 'Bug is open.');
INSERT INTO bug_status (status_id, status_name, status_name_desc) VALUES (2, 'work in progress', 'Bug is in progress.');
INSERT INTO bug_status (status_id, status_name, status_name_desc) VALUES (3, 'closed', 'Bug is closed.');
INSERT INTO bug_status (status_id, status_name, status_name_desc) VALUES (4, 'cancelled', 'Bug is cancelled.');


COMMIT;
