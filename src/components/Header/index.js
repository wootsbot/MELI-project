import { useRouter } from 'next/router';
import { useForm, FormProvider } from 'react-hook-form';

import Brand from '@/components/Brand';
import Margin from '@design-system/Margin';
import FormSearch from '@/components/FormSearch';

import styles from './Header.module.scss';

function Header() {
  const router = useRouter();
  const formMethods = useForm({ mode: 'onChange' });

  const { handleSubmit } = formMethods;

  function handleSubmitDta(data) {
    const { searchField } = data;
    router.push(`/items?search=${searchField}`);
  }

  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>
        <nav role="navigation" aria-label="search items" className={styles.nav}>
          <Margin side="right" xs={32}>
            <Brand />
          </Margin>

          <div className={styles.form}>
            <FormProvider {...formMethods}>
              <form role="search" onSubmit={handleSubmit(handleSubmitDta)}>
                <FormSearch />
              </form>
            </FormProvider>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
