import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideFunctions(() => getFunctions()),
      provideStorage(() => getStorage()),
      provideMessaging(() => getMessaging())
    ),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-40ecc","appId":"1:476540610007:web:5d61063827537fd5001792","storageBucket":"friendlychat-40ecc.appspot.com","locationId":"us-central","apiKey":"AIzaSyDY071R0PhYSWNpCuTqH6S-mDNvBIV090A","authDomain":"friendlychat-40ecc.firebaseapp.com","messagingSenderId":"476540610007"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ],
};
