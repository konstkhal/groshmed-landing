import * as React from 'react';
import AppTheme from '../components/AppTheme';
import SignUp from '../components/SignUp';

export default function Page() {
  return (
    <AppTheme title="Onepirate theme - MUI" description="A onepirate theme">
      <SignUp />
    </AppTheme>
  );
}
