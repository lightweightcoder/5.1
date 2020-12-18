import db from './models/index.mjs';

// import your controllers here
import items from './controllers/items.mjs';

export default function routes(app) {
  // initialize the controller functions here
  // pass in the db for all callbacks
  const ItemsController = items(db);

  // define your route matchers here using app
  app.get('/items', ItemsController.index);
}
