'use client';

import { useTranslation } from 'react-i18next';

interface TProps {
  k: string;
  values?: Record<string, unknown>;
}

export default function T({ k, values }: TProps) {
  const { t } = useTranslation();
  return <>{t(k, values)}</>;
}


