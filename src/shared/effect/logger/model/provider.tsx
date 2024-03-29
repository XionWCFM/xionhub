import React from 'react';
import { PubSubManager } from '@xionhub/pubsub';
import { BlogEvent } from './atom';
import { tupleToString } from './lib';
import { LoggerDatabase } from '@/src/shared/db/log';

export type UserTracker = {
  track: (event: BlogEvent['logEventParam']) => void;
};

export const logger = new PubSubManager<BlogEvent['logEvent']>();

export const useLogger = (): UserTracker => {
  const track = (event: BlogEvent['logEventParam']) => {
    const eventName = tupleToString<BlogEvent['eventName']>(event.eventName);
    const eventPath = tupleToString<BlogEvent['eventPath']>(event.eventPath);
    logger.publish({
      type: event.type,
      eventName,
      eventPath,
    });
  };
  return {
    track,
  };
};

export const LoggerProvider = () => {
  React.useEffect(() => {
    const listener = async (event: BlogEvent['logEvent']) => {
      console.group('😂 GA Event Logging');
      console.log('event : ', event);
      console.log('😍 hello world 😍');
      const result = await LoggerDatabase.createLog(event);
      console.log('database id : ', result);
      console.groupEnd();
    };
    logger.subscribe('BLOG_EVENT', listener);
    return () => logger.unsubscribe('BLOG_EVENT', listener);
  }, []);
  return null;
};
