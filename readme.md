# GlobalTags.ts
A lightweight typescript wrapper for the [GlobalTagAPI](https://github.com/Global-Tags/API).

### Get started
```typescript
import { GlobalTagAPI } from "globaltags.ts";

const api = new GlobalTagAPI(); // If you want to use a custom instance of the api you need to pass an options object

// Get a player object
const player = await api.fetchPlayer('<UUID>', { token: '<YOUR API KEY>' }).catch(() => null); // Now you can perform various actions on the Player instance
```

### Contributing
If you find any bugs or have feature ideas feel free to create an [issue](https://github.com/Global-Tags/Typescript/issues/new).