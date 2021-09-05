import { useRouter } from 'next/router';
import { useForm, FormProvider } from 'react-hook-form';

import FormSearch from '@/components/FormSearch';
import Brand from '@/components/Brand';

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
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Brand />

          <div className={styles.form}>
            <FormProvider {...formMethods}>
              <form onSubmit={handleSubmit(handleSubmitDta)}>
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
