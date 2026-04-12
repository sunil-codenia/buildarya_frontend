'use client';

import { ReactNode } from 'react';

interface SchemaInjectorProps {
  schemas: Record<string, any>[];
  children?: ReactNode;
}

export default function SchemaInjector({ schemas, children }: SchemaInjectorProps) {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          id={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      {children}
    </>
  );
}
