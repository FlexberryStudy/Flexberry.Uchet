



CREATE TABLE [Тип] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Название] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Филиал] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Название] VARCHAR(255)  NULL,

	 [Адрес] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ПО] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Название] VARCHAR(255)  NULL,

	 [Версия] VARCHAR(255)  NULL,

	 [Freeware] BIT  NULL,

	 [Вендор_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [РабочееМесто_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Вендор] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Название] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Операции] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Дата] DATETIME  NULL,

	 [Действие] VARCHAR(9)  NULL,

	 [Состояние] VARCHAR(8)  NULL,

	 [Оборудование_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [Админ_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [РабочееМесто] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ИнвНомер] VARCHAR(255)  NULL,

	 [Кабинет] VARCHAR(255)  NULL,

	 [Место] VARCHAR(255)  NULL,

	 [Филиал_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Оборудование] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ИнвНомер] VARCHAR(255)  NULL,

	 [Название] VARCHAR(255)  NULL,

	 [ДатаДобавления] DATETIME  NULL,

	 [Сотрудник_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [Тип_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [РабочееМесто_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Пользователь] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 [Админ] BIT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




 ALTER TABLE [ПО] ADD CONSTRAINT [ПО_FВендор_0] FOREIGN KEY ([Вендор_m0]) REFERENCES [Вендор]
CREATE INDEX ПО_IВендор_m0 on [ПО] ([Вендор_m0])

 ALTER TABLE [ПО] ADD CONSTRAINT [ПО_FРабочееМесто_0] FOREIGN KEY ([РабочееМесто_m0]) REFERENCES [РабочееМесто]
CREATE INDEX ПО_IРабочееМесто_m0 on [ПО] ([РабочееМесто_m0])

 ALTER TABLE [Операции] ADD CONSTRAINT [Операции_FОборудование_0] FOREIGN KEY ([Оборудование_m0]) REFERENCES [Оборудование]
CREATE INDEX Операции_IОборудование_m0 on [Операции] ([Оборудование_m0])

 ALTER TABLE [Операции] ADD CONSTRAINT [Операции_FПользователь_0] FOREIGN KEY ([Админ_m0]) REFERENCES [Пользователь]
CREATE INDEX Операции_IАдмин_m0 on [Операции] ([Админ_m0])

 ALTER TABLE [РабочееМесто] ADD CONSTRAINT [РабочееМесто_FФилиал_0] FOREIGN KEY ([Филиал_m0]) REFERENCES [Филиал]
CREATE INDEX РабочееМесто_IФилиал_m0 on [РабочееМесто] ([Филиал_m0])

 ALTER TABLE [Оборудование] ADD CONSTRAINT [Оборудование_FПользователь_0] FOREIGN KEY ([Сотрудник_m0]) REFERENCES [Пользователь]
CREATE INDEX Оборудование_IСотрудник_m0 on [Оборудование] ([Сотрудник_m0])

 ALTER TABLE [Оборудование] ADD CONSTRAINT [Оборудование_FТип_0] FOREIGN KEY ([Тип_m0]) REFERENCES [Тип]
CREATE INDEX Оборудование_IТип_m0 on [Оборудование] ([Тип_m0])

 ALTER TABLE [Оборудование] ADD CONSTRAINT [Оборудование_FРабочееМесто_0] FOREIGN KEY ([РабочееМесто_m0]) REFERENCES [РабочееМесто]
CREATE INDEX Оборудование_IРабочееМесто_m0 on [Оборудование] ([РабочееМесто_m0])

 ALTER TABLE [STORMWEBSEARCH] ADD CONSTRAINT [STORMWEBSEARCH_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

 ALTER TABLE [STORMFILTERDETAIL] ADD CONSTRAINT [STORMFILTERDETAIL_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

 ALTER TABLE [STORMFILTERLOOKUP] ADD CONSTRAINT [STORMFILTERLOOKUP_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

