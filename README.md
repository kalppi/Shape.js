# Shape.js

Shape.js is a library that helps you define what members and data types your objects are supposed to have, and then use that information in your unit tests.

## Example

```js
import Shape from 'shape.js';

const idShape = Shape.integer({min: 1});
const dateShape = Shape.regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/);

const reservationShape = Shape.object()
                            .field('id', idShape)
                            .field('start', dateShape)
                            .field('start', dateShape)
                            .field('customer');

const arrayOfReservationsShape = Shape.arrayOf(reservationShape);

```

### Unit tests

### Generally
```js
idShape.matches(1);
```

#### Using with Jest

```js
expect.extend(Shape.toBeShaped());

...

const data = await reservationService.getOne(1);

expect(data).toBeShaped(reservationShape);
```

### Using with Supertest
```js
request(app)
    .get('/api/reservation')
    .expect(arrayOfReservationsShape.matchesRequest());

```
### Example when an api can return 5 objects or an error
```js

const successShape = Shape.object()
                        .fields({
                            id: Shape.integer(),
                            name: Shape.string()
                        });

const failureShape = Shape.object()
                        .field('error', Shape.string());

const apiShape = Shape.anyOf(Shape.arrayOf(successShape, {count: 5}), failureShape);

request(app)
    .get('/api/get')
    .expect(apiShape.matchesRequest());

```