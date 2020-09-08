## Angular Library Rollup
It's a sample project that show how to implement an angular library using rollup as a bundler.

## Build
After clone and install the dependencies, run the following command:

```shell
node build.js
```

## Build target
After build you'll get a ESM 2015 and UMD file into the dist folder.

## Usage of ESM 2015
This format of the library can be used in other angular project in two ways:

### Importing as a module

```js
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HelloWorldModule } from '@cquispera/angular-library-rollup';

@NgModule({
  imports: [
    HelloWorldModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Now you can use the tag <cqr-hello-world></cqr-hello-world> in your html.

### Loading as a route
```js
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'library',
    loadChildren: () => import('@cquispera/angular-library-rollup').then(m => m.HelloWorldModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

## Usage of UMD
This other format of libray is used usually to integrate the library into an Angular project at runtime.
