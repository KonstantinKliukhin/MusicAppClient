'use client';
import { Effect, Event } from 'effector/compat';
import { useUnit } from 'effector-react/compat';
import React, { PropsWithChildren, useEffect } from 'react';

type PropsType<Payload> = PropsWithChildren & {
  payload: Payload;
  setter: Event<Payload> | Effect<Payload, any, Error>;
};

export function EffectorSetter<Payload>(props: PropsType<Payload>) {
  const { setter } = useUnit({ setter: props.setter }) as { setter: (arg: Payload) => void };

  useEffect(() => {
    setter(props.payload);
  }, [props.payload]);

  return <>{props.children}</>;
}
