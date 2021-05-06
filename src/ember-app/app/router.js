import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-uchet-вендор-l');
  this.route('i-i-s-uchet-вендор-e',
  { path: 'i-i-s-uchet-вендор-e/:id' });
  this.route('i-i-s-uchet-вендор-e.new',
  { path: 'i-i-s-uchet-вендор-e/new' });
  this.route('i-i-s-uchet-оборудование-l');
  this.route('null',
  { path: 'null/:id' });
  this.route('null.new',
  { path: 'null/new' });
  this.route('i-i-s-uchet-операции-l');
  this.route('i-i-s-uchet-операции-e',
  { path: 'i-i-s-uchet-операции-e/:id' });
  this.route('i-i-s-uchet-операции-e.new',
  { path: 'i-i-s-uchet-операции-e/new' });
  this.route('i-i-s-uchet-пользователь-l');
  this.route('i-i-s-uchet-пользователь-e',
  { path: 'i-i-s-uchet-пользователь-e/:id' });
  this.route('i-i-s-uchet-пользователь-e.new',
  { path: 'i-i-s-uchet-пользователь-e/new' });
  this.route('i-i-s-uchet-рабочее-место-l');
  this.route('i-i-s-uchet-рабочее-место-e',
  { path: 'i-i-s-uchet-рабочее-место-e/:id' });
  this.route('i-i-s-uchet-рабочее-место-e.new',
  { path: 'i-i-s-uchet-рабочее-место-e/new' });
  this.route('i-i-s-uchet-тип-l');
  this.route('i-i-s-uchet-тип-e',
  { path: 'i-i-s-uchet-тип-e/:id' });
  this.route('i-i-s-uchet-тип-e.new',
  { path: 'i-i-s-uchet-тип-e/new' });
  this.route('i-i-s-uchet-филиал-l');
  this.route('i-i-s-uchet-филиал-e',
  { path: 'i-i-s-uchet-филиал-e/:id' });
  this.route('i-i-s-uchet-филиал-e.new',
  { path: 'i-i-s-uchet-филиал-e/new' });
});

export default Router;
