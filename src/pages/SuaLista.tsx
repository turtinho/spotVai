import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonImg, IonText, IonThumbnail } from '@ionic/react';
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
  IonList,
} from '@ionic/react';


const SuaLista: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle> Tribo da Periferia </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
            <IonImg src='https://storage.frequenciamaxima.com.br/capas/YkUYCE22Qb4z/550-cd-tribo-da-periferia-5-ultimo.jpg'/>
      <IonList>
      <IonItem routerLink='/tab3'>
        <IonLabel>Pianista da Rua 6</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Photoshop</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Imprevisível</IonLabel>
      </IonItem>
      </IonList>
        <IonHeader collapse="condense">
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default SuaLista;
