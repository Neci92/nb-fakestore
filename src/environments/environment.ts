// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
	apiKey: "AIzaSyDhnI7Jthai_B3SCPTIoDjOK1j_g8_9uXs",
    authDomain: "fakestore-6974c.firebaseapp.com",
    databaseURL: "https://fakestore-6974c.firebaseio.com",
    projectId: "fakestore-6974c",
    storageBucket: "fakestore-6974c.appspot.com",
    messagingSenderId: "78859087309"
  }
};
