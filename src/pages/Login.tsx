import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonButton, IonInput } from '@ionic/react';

const Login: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Faça seu Login</IonTitle>
      </IonToolbar>
      <IonCard>
      <IonInput>Digite o seu Login:</IonInput>
      <IonInput type='password'>Digite a sua senha:</IonInput>
    </IonCard>
    </IonHeader>
    <IonButton color='danger' routerLink='/tab4'>
        Entrar
    </IonButton>
  </IonPage>
  );
};

export default Login;