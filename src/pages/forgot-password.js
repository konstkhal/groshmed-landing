import * as React from 'react';
import AppTheme from '../components/AppTheme';
import ForgotPassword from '../components/ForgotPassword';

export default function Page() {
  return (
    <AppTheme title="Onepirate theme - MUI" description="A onepirate theme">
      <ForgotPassword />
    </AppTheme>
  );
}
