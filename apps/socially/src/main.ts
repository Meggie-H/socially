import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CoreModule } from '@socially/app/core/feature';

platformBrowserDynamic()
  .bootstrapModule(CoreModule)
  .catch((err) => console.error(err));
