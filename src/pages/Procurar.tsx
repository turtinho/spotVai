import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar,IonIcon, IonItem} from '@ionic/react';
import {
  home,
  informationCircle,
  person,
  search,
  map,
} from 'ionicons/icons';

const Procurar: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Procurar Faixa</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonItem>
        <IonInput>Pesquise uma mídia:</IonInput>
        <IonButton routerLink='/Resposta'color='light'>
          <IonIcon icon={search}/>
        </IonButton>
      </IonItem>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Procurar;
