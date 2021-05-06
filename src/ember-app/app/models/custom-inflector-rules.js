import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('оборудование', 'Оборудованиеs');
inflector.irregular('пользователь', 'Пользовательs');
inflector.irregular('операции', 'Операцииs');
inflector.irregular('вендор', 'Вендорs');
inflector.irregular('филиал', 'Филиалs');
inflector.irregular('место', 'Местоs');
inflector.irregular('тип', 'Типs');
inflector.irregular('о', 'Оs');

export default {};
