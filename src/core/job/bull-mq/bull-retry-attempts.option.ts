// retry-options.ts

export class BullRetryAttemptsOption {
  attempts: number;
  backoff: {
    type: 'exponential' | 'fixed';
    delay: number;
  };

  constructor(attempts: number, backoffDelaySeconds: number) {
    this.attempts = attempts;
    this.backoff = {
      type: 'exponential',
      delay: backoffDelaySeconds * 1000,
    };
  }
}
