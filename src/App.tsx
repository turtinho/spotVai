import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem,IonButton,
} from '@ionic/react';
import {
  home,
  informationCircle,
  person,
  search,
  map,
  play
} from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import SuaLista from './pages/SuaLista';
import Procurar from './pages/Procurar';
import Reproduzindo from './pages/Reproduzindo';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Resposta from './pages/Resposta';
import React from 'react';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <SuaLista />
          </Route>
          <Route exact path="/tab2">
            <Procurar />
          </Route>
          <Route path="/tab3">
            <Reproduzindo />
          </Route>
          <Route exact path="/tab4">
            <Menu/>
          </Route>
          <Route exact path="/Login">
            <Login/>
          </Route>
          <Route exact path="/Resposta">
            <Resposta/>
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={person} />
            <IonLabel>Sua Lista</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={search} />
            <IonLabel>Procurar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={play} />
            <IonLabel>Reproduzindo</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
          <IonIcon icon={home} />
            <IonLabel>Menu</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
