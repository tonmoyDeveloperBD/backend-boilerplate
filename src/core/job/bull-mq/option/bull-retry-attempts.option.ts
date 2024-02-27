export class BullRetryAttemptsOption {
  attempts?: number;
  backoff?: {
    type: 'exponential' | 'fixed';
    delay: number;
  };
  limit?: number;

  constructor(attempts: number = 0, backoffDelaySeconds: number = 0, limit: number = 0) {
    this.attempts = attempts;
    this.backoff = {
      type: 'exponential',
      delay: backoffDelaySeconds * 1000,
    };
    this.limit = limit;
  }
}
