import * as React from 'react';
import AppTheme from '../components/AppTheme';
import SignIn from '../components/SignIn';

export default function Page() {
  return (
    <AppTheme title="Onepirate theme - MUI" description="A onepirate theme">
      <SignIn />
    </AppTheme>
  );
}
