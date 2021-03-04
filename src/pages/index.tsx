import React, { useCallback, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { FiGithub, FiArrowRight } from 'react-icons/fi';

import styles from '../styles/pages/Login.module.css';
import Head from 'next/head';

export default function Login() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const { push } = useRouter();
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (username) {
      push(`/${username}`);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Moveit</title>
      </Head>
      <div className={styles.content}>
        <img src="/logo-full-white.svg" alt="Logo" />
        <strong>Bem-vindo</strong>

        <div className={styles.title}>
          <FiGithub size={36} />
          <span>Faça login com seu GitHub para iniciar.</span>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite seu username"
            onChange={(e) => setUsername(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={inputRef}
          />
          {
            username ? (
              <button type="submit" >
                <FiArrowRight size={34} />
              </button>
            ) : (
                <button disabled >
                  <FiArrowRight size={34} />
                </button>
              )
          }
        </form>
      </div>
    </div>
  );
}